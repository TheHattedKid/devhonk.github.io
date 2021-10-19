Bad Apple!! on a FX-CG50
thanks maxime for automating my workflow with BA!'s
This is how I ran Bad Apple!! on my FX-CG50(its not that dolgreat tho)
\_-----_/
<centeredText>NOTE: So this BA! should have been published like, *months* earlier in a **PDF** but now that I have a website... Why not do it?</centeredText>

# Chapter 1: The Broad Story

<centeredText>
So everything really starts the 24th of Jaunary 2021 on the Discord server Arkode where the user Nedo(:>) posts this :
</centeredText>

> [my goal is to play bad apple in the console](https://discord.com/channels/706241564350873684/706243286557523999/802988192601079839)



-Nedo
<centeredText>
The very next day, I sent
</centeredText>
> [time to do some stuff](https://discord.com/channels/706241564350873684/793164407977934918/803350180287479829)

> [imma port bad apple ~~2~~](https://discord.com/channels/706241564350873684/793164407977934918/803350205700898826)

> [but](https://discord.com/channels/706241564350873684/793164407977934918/803350218166108242)

> [to my calc](https://discord.com/channels/706241564350873684/793164407977934918/803350227250970664)


-Me
<centeredText>
Then everyone complained about me wanting to only use C, official hueh moment.
</centeredText>

<centeredText>
The first method that I thinked of is of storing a big array of all of the pixels, of all the frames, but decided to scrape the idea because of the limited memory(for information, gint lets you only use 500kB of RAM(POST TEXT: the devs are trying to find a way to get more RAM out of it, my bad)(source: I dont know I just read the linker script and I may be wrong), so I'll just set this as the max amount of RAM you can use)
</centeredText>

<centeredText>
The second one is just to store it into a file, and that would be a good way because the graphing calculator has 16MiB of Flash usable by programs and in a USB Flash mode(funfact, my Manjaro partition is 128GiB, therefore, I would need almost 8000(8192 to be almost exact) FX-CG50s to put an image of my drive inside them)
</centeredText>

<centeredText>
I also wanted to originally use PrizmSDK, but it was a pain to install on Linux and other reasons, but quickly found out about `gint`, an epic unikernel or whatever for the fx-cg50(color) and fx(monochrome) calculators.
I also had a problem with me losing my graphing calculator(sadly) but since I am an idiot it was in my bag ( :^| ) so fast forward to April :^), when I release [my demo](https://youtu.be/0to33n63xKo) to the WOOOORRRLDDD!!!(literally 2 months after nedo does his Bad Apple on Notepad) and release the program on Planète Casio and TI-Planet, *fin*.
</centeredText>

# Chapter 2: The inner workings

<centeredText>
So you want to know how does it work? Well it's suprisingly simple.
</centeredText>

<centeredText>
There's a file named ba.prm at the root directory, it's the video file
</centeredText>

<centeredText>
How is a frame written? Well, a byte of this file contains 8 pixels, and since the output resolution is of 64\*64 pixels, a frame takes *512* bytes of the file, which does not look like much, but for 3 minutes of video, the output file is of around 3MiB(around 18.75% of the total flash memory avaible for programs), and its mostly wasted for monochrome video.
</centeredText>

<centeredText>
Wait a second... You wanna see the code? Oh it's right there, but be careful of the ***Bad Code*** that it is(funfact: the code was made before gint\_world\_switch was a thing, and I was new to the tool)!
</centeredText>

```c
//you can use this code whenever you want
//just tell everyone that this atrocity is mine
//thanks
#include <gint/display.h>
#include <gint/keyboard.h>

#include <gint/clock.h>
#include <gint/timer.h>

#include <gint/gint.h>

#include <gint/std/stdio.h>
#include <gint/std/stdlib.h>
#include <gint/std/string.h>

#include <gint/bfile.h>

#define WIDTH 64
#define HEIGHT 64
#define SIZE (WIDTH*HEIGHT)
#define BSIZE ((WIDTH / 8) * HEIGHT)
//#define SIZE (12)
//#define BSIZE 12
#define FRAMES 6572
void openFile();
void readBlock();
void closeFile();
uint8_t getBit(int position, uint8_t b);

int fid = 0;
int frame = 0;
char hasError = 0;
char* currentFrame;
char* framePure;

const uint16_t *bapath = u"\\\\fls0\\ba.prm";

static int callBack(volatile int* ticc);

int main(void)
{
	static volatile int ticc = 1;

	int timerID = timer_setup(TIMER_ANY, 34482, callBack, &ticc);
	if(timerID >= 0) timer_start(timerID);
	dclear(C_WHITE);
	currentFrame = malloc(SIZE);
	framePure = malloc(BSIZE);

	dtext(1, 1, C_BLACK, "Checking Bad Apple file...");
	dupdate();
	gint_switch(openFile);
	dclear(C_WHITE);
	dupdate();

	if(hasError) {
		dclear(C_WHITE);
		dtext(1, 1, C_RED, "Cant quite read the file.");
		dupdate();
		getkey();
		return 1;
	}




	while(1) {
		while(!ticc) sleep();
		dclear(C_WHITE);
		gint_switch(readBlock);
		if(hasError) {
			dclear(C_WHITE);
			dtext(1, 1, C_RED, "Cant quite read the file.");
			dupdate();
			getkey();
			return 1;
		}
		key_event_t event = getkey_opt(GETKEY_DEFAULT, &ticc);
		if(event.key == KEY_MENU || event.key == KEY_EXIT) {
			break;
		}
		for(int y = 0; y < HEIGHT; y++) {
			for(int x = 0; x < WIDTH; x++) {
				//x * 3
				//y * 3
				drect(x * 3, y * 3, x * 3 + 3, y * 3 + 3, currentFrame[(y * WIDTH) + x] == 1 ? C_WHITE : C_BLACK);
			}
		}

		dupdate();
		frame++;
	}

	gint_switch(closeFile);
	if(timerID >= 0) timer_stop(timerID);
	return 1;
}


void readBlock() {
	int i = 0;
	int j = 0;
	int errorCode = BFile_Read(fid, framePure, BSIZE, frame * BSIZE);
	hasError = errorCode < 0 ? 1 : 0;
	if(hasError) return;

	for(; i < SIZE; i++) {
        int j = (i / 8);
        int k = (i % 8);
        uint8_t b = framePure[j];
        currentFrame[i] = getBit(k, b);
    }
}

void openFile() {
	int value = BFile_Open(bapath, BFile_ReadOnly);
	hasError = value < 0 ? 1 : 0;
	if(hasError) return;
	fid = value;
}

uint8_t getBit(int position, uint8_t b) {
    return /*(uint8_t) (((uint8_t) (b) & (0b10000000 >> position)))*/ ((b >> (7 - position))  & 0x01);
}
void closeFile() {
	BFile_Close(fid);
}
static int callBack(volatile int* ticc) {
	*ticc = 1;
	return TIMER_CONTINUE;
}
```


# Chapter 3: Copycats

<centeredText>
Before starting the project I checked arround if it was worth it.
<s>Well guess what? It wasn't!</s> (never think of a project as non worth it btw, you still learn from it)
Turns out someone has already made Bad Apple for the same calculator, in *Python*, and it was pretty good!
but turns out... THE LINK. FOR. DOWNLOAD. WAS. DEAD. AT THE TIME.
so I decided to do it as it gave me 2 more reason to do it
</centeredText>

<centeredText>

# Chapter 4: Sorry...

</centeredText>

<centeredText>
This is the first BA! ever made, so I'm making errors + I'm not native. This BA! is a test for the next ones(The Hello World one does not count >:( )
</centeredText>

<centeredText>
On that, I've got stuff to do! See you next time!
</centeredText>
