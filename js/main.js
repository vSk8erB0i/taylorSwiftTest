var quiz = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0,
    p8: 0,
    p9: 0,
    p10: 0,
    p11: 0,
    p12: 0,
    p13: 0,
    p14: 0,
    p15: 0,
    name: "",
    age: 0,
    puntajeTotal: 0,
    enviar: function () {
        this.p1 = parseInt(document.querySelector('input[name="radio"]:checked').value);
        this.p2 = parseInt(document.querySelector('input[name="radio2"]:checked').value);
        this.p3 = parseInt(document.querySelector('input[name="radio3"]:checked').value);
        this.p4 = parseInt(document.querySelector('input[name="radio4"]:checked').value);
        this.p5 = parseInt(document.querySelector('input[name="radio5"]:checked').value);
        this.p6 = parseInt(document.querySelector('input[name="radio6"]:checked').value);
        this.p7 = parseInt(document.querySelector('input[name="radio7"]:checked').value);
        this.p8 = parseInt(document.querySelector('input[name="radio8"]:checked').value);
        this.p9 = parseInt(document.querySelector('input[name="radio9"]:checked').value);
        this.p10 = parseInt(document.querySelector('input[name="radio10"]:checked').value);
        this.p11 = parseInt(document.querySelector('input[name="radio11"]:checked').value);
        this.p12 = parseInt(document.querySelector('input[name="radio12"]:checked').value);
        this.p13 = parseInt(document.querySelector('input[name="radio13"]:checked').value);
        this.p14 = parseInt(document.querySelector('input[name="radio14"]:checked').value);
        this.p15 = parseInt(document.querySelector('input[name="radio15"]:checked').value);
        this.name = document.getElementById('name').value;
        this.age = parseInt(document.getElementById('age').value);
        if (this.name == "" || this.age== "") {
            alert("Por favor, completa todos los campos.");
            return;
        } else {
            switch (this.p1) {
                case 1:
                    this.p1 = 0;
                    break;
                case 2:
                    this.p1 = 1;
                    break;
                case 3:
                    this.p1 = 0;
                    break;
                case 4:
                    this.p1 = 0;
                    break;
            };
            switch (this.p2) {
                case 1:
                    this.p2 = 1;
                    break;
                case 2:
                    this.p2 = 0;
                    break;
                case 3:
                    this.p2 = 0;
                    break;
                case 4:
                    this.p2 = 0;
                    break;
            };
            switch (this.p3) {
                case 1:
                    this.p3 = 0;
                    break;
                case 2:
                    this.p3 = 0;
                    break;
                case 3:
                    this.p3 = 1;
                    break;
                case 4:
                    this.p3 = 0;
                    break;
            };
            switch (this.p4) {
                case 1:
                    this.p4 = 0;
                    break;
                case 2:
                    this.p4 = 0;
                    break;
                case 3:
                    this.p4 = 0;
                    break;
                case 4:
                    this.p4 = 1;
                    break;
            };
            switch (this.p5) {
                case 1:
                    this.p5 = 1;
                    break;
                case 2:
                    this.p5 = 0;
                    break;
                case 3:
                    this.p5 = 0;
                    break;
                case 4:
                    this.p5 = 0;
                    break;
            };
            switch (this.p6) {
                case 1:
                    this.p6 = 0;
                    break;
                case 2:
                    this.p6 = 0;
                    break;
                case 3:
                    this.p6 = 1;
                    break;
                case 4:
                    this.p6 = 0;
                    break;
            };
            switch (this.p7) {
                case 1:
                    this.p7 = 0;
                    break;
                case 2:
                    this.p7 = 1;
                    break;
                case 3:
                    this.p7 = 0;
                    break;
                case 4:
                    this.p7 = 0;
                    break;
            };
            switch (this.p8) {
                case 1:
                    this.p8 = 1;
                    break;
                case 2:
                    this.p8 = 0;
                    break;
                case 3:
                    this.p8 = 0;
                    break;
                case 4:
                    this.p8 = 0;
                    break;
            };
            switch (this.p9) {
                case 1:
                    this.p9 = 0;
                    break;
                case 2:
                    this.p9 = 0;
                    break;
                case 3:
                    this.p9 = 1;
                    break;
                case 4:
                    this.p9 = 0;
                    break;
            };
            switch (this.p10) {
                case 1:
                    this.p10 = 0;
                    break;
                case 2:
                    this.p10 = 1;
                    break;
                case 3:
                    this.p10 = 0;
                    break;
                case 4:
                    this.p10 = 0;
                    break;
            };
            switch (this.p11) {
                case 1:
                    this.p11 = 0;
                    break;
                case 2:
                    this.p11 = 1;
                    break;
                case 3:
                    this.p11 = 0;
                    break;
                case 4:
                    this.p11 = 0;
                    break;
            };
            switch (this.p12) {
                case 1:
                    this.p12 = 0;
                    break;
                case 2:
                    this.p12 = 0;
                    break;
                case 3:
                    this.p12 = 0;
                    break;
                case 4:
                    this.p12 = 1;
                    break;
            };
            switch (this.p13) {
                case 1:
                    this.p13 = 0;
                    break;
                case 2:
                    this.p13 = 1;
                    break;
                case 3:
                    this.p13 = 0;
                    break;
                case 4:
                    this.p13 = 0;
                    break;
            };
            switch (this.p14) {
                case 1:
                    this.p14 = 0;
                    break;
                case 2:
                    this.p14 = 0;
                    break;
                case 3:
                    this.p14 = 1;
                    break;
                case 4:
                    this.p14 = 0;
                    break;
            };
            switch (this.p15) {
                case 1:
                    this.p15 = 1;
                    break;
                case 2:
                    this.p15 = 0;
                    break;
                case 3:
                    this.p15 = 0;
                    break;
                case 4:
                    this.p15 = 0;
                    break;
            };
            this.puntajeTotal = this.p1 + this.p2 + this.p3 + this.p4 + this.p5 + this.p6 +
                this.p7 + this.p8 + this.p9 + this.p10 + this.p11 + this.p12 +
                this.p13 + this.p14 + this.p15;
            localStorage.setItem('puntajeQuiz', this.puntajeTotal);
            localStorage.setItem('name', this.name);
            localStorage.setItem('age', this.age);
            window.open('results.html', 'puntajeQuiz', width = 500, height = 500);
        }

    }
}