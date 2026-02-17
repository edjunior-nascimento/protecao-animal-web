class AnimalFormatter {

    getIdade(dataNascimento) {
        if (!dataNascimento) return 'Idade desconhecida';
        
        const partes = dataNascimento.split('-');
        const dia = parseInt(partes[0]);
        const mes = parseInt(partes[1]) - 1;
        const ano = parseInt(partes[2]);
        
        const nascimento = new Date(ano, mes, dia);
        const hoje = new Date();
        
        // Calcula anos
        let anos = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth();
        const diaAtual = hoje.getDate();
        
        // Ajusta se ainda não fez aniversário este ano
        if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
            anos--;
        }
        
        // Calcula meses
        let meses = mesAtual - mes;
        if (diaAtual < dia) {
            meses--;
        }
        if (meses < 0) {
            meses += 12;
        }
        
        // Retorna a idade formatada
        if (anos > 0) {
            if (meses > 0) {
                return `${anos} ${anos === 1 ? 'ano' : 'anos'} e ${meses} ${meses === 1 ? 'mês' : 'meses'}`;
            }
            return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
        } else if (meses > 0) {
            return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
        } else {
            return 'Menos de 1 mês';
        }
    }

    getEspecie(idEspecie) {
       if(idEspecie) {
            return idEspecie === 1 ? 'Gato' : 'Cão';
        }
        return 'Espécie desconhecida';
    }

   getSexo(idSexo) {
        if (idSexo) {
            return idSexo === 1 ? 'Fêmea' : 'Macho';
        }
        return 'Sexo desconhecido';
    }
}