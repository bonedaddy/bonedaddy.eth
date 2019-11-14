class HelloENS {
    constructor(message) {
        this.message = message;
    }
    helloworld() {
        return this.message;
    }
}
let exp = new HelloENS("bonedaddy.eth - uploaded to IPFS with Temporal");
document.body.textContent = exp.helloworld();
