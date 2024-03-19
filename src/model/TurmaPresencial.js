class TurmaPresencial extends Turma {

    constructor(frequencia) {
        super();
        this.frequencia = frequencia;
    }

    aprovado() {
        if (this.nota >= 6 && this.frequencia >= 75) {
            return true;
        }
        return false;
    }
}
module.exports = TurmaPresencial;