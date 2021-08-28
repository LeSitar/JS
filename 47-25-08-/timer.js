class Timer{
    constructor(count, onUpdateCount, onStop) {
        this.count = count;
        this.iDinterval = null;
        this.onUpdateCount = onUpdateCount;
        this.onStop = onStop;
    }
    start() {
        const that = this;
        this.iDinterval = setInterval(function () {
            if (that.count > 0) {
                that.count--;
                that.onUpdateCount(that.count)
            } else {
               that.stop() //clearInterval(this.iDinterval)
            }
            console.log(that.count)
        }, 1000)
        }
    stop() {
        console.log(this)
        clearInterval(this.iDinterval);
        this.onStop(this.count)
    }   
}
