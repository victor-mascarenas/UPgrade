class StopWatch {
    #startTime;
    #isRunning;
    #duration;

    constructor () {
        this.#startTime = null;
        this.#isRunning = false;
        this.#duration = 0;
    }

    get Duration() {
        return this.#duration;
    }

    #setDuration (endTime) {
        this.#duration += (endTime.getTime() - this.#startTime.getTime()) / 1000;
    }

    start () {
        if (this.#isRunning) {
            throw new Error('Already started');
        } else {
            this.#startTime = new Date();
            this.#isRunning = true;
        }
    }
    stop () {
        if (!this.#isRunning) {
            throw new Error('Not started');
        } else {
            this.#isRunning = false;
            this.#setDuration(new Date());
        }
    }
    reset () {
        this.#duration = 0;
    }
}

//Console results:
/* const sw = new StopWatch();
undefined
sw.start()
undefined
sw.start();
stopWatch.js:22 Uncaught Error: Already started
    at StopWatch.start (stopWatch.js:22)
    at <anonymous>:1:4
start @ stopWatch.js:22
(anonymous) @ VM795:1
sw.stop();
undefined
sw.stop();
stopWatch.js:30 Uncaught Error: Not started
    at StopWatch.stop (stopWatch.js:30)
    at <anonymous>:1:4
stop @ stopWatch.js:30
(anonymous) @ VM857:1
sw.Duration;
7.163
sw.start();
undefined
sw.stop();
undefined
sw.Duration;
11.33
sw.reset();
undefined
sw.Duration;
0 */