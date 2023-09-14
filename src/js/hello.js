export class Hello {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  setOnClick(){
    document.getElementById("btn_test").addEventListener("click", (e) => {
      alert(this.name);
    });
  }
}