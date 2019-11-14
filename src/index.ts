class HelloENS {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
    helloworld() {
        return this.message;
    }
}

let exp = new HelloENS("bonedaddy.eth - uploaded to IPFS with Temporal");

document.body.textContent = exp.helloworld();
