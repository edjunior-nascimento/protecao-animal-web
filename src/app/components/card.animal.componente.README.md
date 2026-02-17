# CardAnimalComponent - Documentação

## Descrição
Componente Web Component para exibir cards de animais disponíveis para adoção. O componente exibe foto, nome, espécie, sexo, idade e localização do animal, com integração completa ao backend-mock.

## Recursos
- ✅ Web Component nativo (Custom Element)
- ✅ Shadow DOM para encapsulamento de estilos
- ✅ Integração com backend-mock via Axios
- ✅ Cálculo automático de idade baseado na data de nascimento
- ✅ Suporte a múltiplas formas de atribuição (atributos ou objeto)
- ✅ Botão de fechar com evento personalizado
- ✅ Responsivo

## Uso Básico

### 1. Importar o componente

```javascript
import { CardAnimalComponent } from '../../components/card.animal.componente.js';
```

### 2. Usar no HTML

#### Opção A: Com atributos

```html
<card-animal-component 
    nome="Luna"
    especie="Gato"
    sexo="Fêmea"
    idade="2 anos"
    local="Guaraciaba do Norte"
    foto="https://exemplo.com/foto.jpg">
</card-animal-component>
```

#### Opção B: Via JavaScript com objeto completo

```javascript
const cardAnimal = document.createElement('card-animal-component');

// Dados vindos da API
const animalData = {
    id: 1,
    nome: "Luna",
    especie: 1, // 1 = Gato, 2 = Cão
    sexo: 1,    // 1 = Fêmea, 2 = Macho
    nascimento: "15-03-2021", // formato DD-MM-YYYY
    local: 3,
    fotos: ["https://exemplo.com/foto1.jpg"],
    adotado: false
};

// Define o objeto animal
cardAnimal.animal = animalData;
cardAnimal.localNome = "Guaraciaba do Norte";

// Adiciona à página
document.body.appendChild(cardAnimal);
```

## Integração com Backend-Mock

### Exemplo completo com AnimaisUsecase

```javascript
import { CardAnimalComponent } from '../../components/card.animal.componente.js';
import { AnimaisUsecase } from '../../use-case/animais.usecase.js';

class MinhaView {
    #animaisUsecase = new AnimaisUsecase();
    
    async exibirAnimal(idAnimal) {
        try {
            // Busca o animal (já vem com o nome do local)
            const animal = await this.#animaisUsecase.getAnimal(idAnimal);
            
            // Cria o componente
            const cardAnimal = document.createElement('card-animal-component');
            cardAnimal.animal = animal;
            cardAnimal.localNome = animal.local; // Já vem como string do usecase
            
            // Listener para fechar
            cardAnimal.addEventListener('fechar-card', () => {
                cardAnimal.remove();
            });
            
            // Adiciona à página
            document.body.appendChild(cardAnimal);
            
        } catch (error) {
            console.error('Erro ao exibir animal:', error);
        }
    }
    
    async listarAnimaisDisponiveis() {
        const animais = await this.#animaisUsecase.listaAnimais();
        const disponiveis = animais.filter(animal => !animal.adotado);
        
        disponiveis.forEach(animal => {
            const card = document.createElement('card-animal-component');
            card.animal = animal;
            card.localNome = animal.local;
            
            document.querySelector('#lista-animais').appendChild(card);
        });
    }
}
```

## Eventos

### fechar-card
Disparado quando o usuário clica no botão X para fechar o card.

```javascript
cardAnimal.addEventListener('fechar-card', (event) => {
    console.log('Card fechado!');
    event.target.remove(); // Remove o card da página
});
```

## Propriedades

### animal (setter/getter)
Define ou obtém o objeto completo do animal.

```javascript
cardAnimal.animal = {
    id: 1,
    nome: "Luna",
    especie: 1,
    sexo: 1,
    nascimento: "15-03-2021",
    local: 3,
    fotos: ["url-foto"],
    adotado: false
};
```

### localNome (setter)
Define o nome do local onde o animal está.

```javascript
cardAnimal.localNome = "Guaraciaba do Norte";
```

## Atributos HTML

Quando não usar o objeto `animal`, você pode usar atributos:

- `nome` - Nome do animal
- `especie` - Espécie (Gato/Cão)
- `sexo` - Sexo (Fêmea/Macho)
- `idade` - Idade formatada (ex: "2 anos")
- `local` - Nome do local
- `foto` - URL da foto

## Formato de Dados da API

O componente espera dados no seguinte formato da API:

```json
{
    "id": 1,
    "nome": "Luna",
    "especie": 1,
    "sexo": 1,
    "nascimento": "15-03-2021",
    "local": 3,
    "fotos": [
        "https://exemplo.com/foto1.jpg",
        "https://exemplo.com/foto2.jpg"
    ],
    "adotado": false
}
```

### Mapeamento de valores:

**Espécie:**
- 1 = Gato
- 2 = Cão

**Sexo:**
- 1 = Fêmea
- 2 = Macho

**Nascimento:** Formato DD-MM-YYYY

**Local:** ID numérico que será convertido em nome pelo `LocaisUsecase`

## Estilização

Os estilos estão encapsulados no Shadow DOM. Para customizar, você precisará:

1. Modificar os estilos internos do componente, ou
2. Usar CSS custom properties (variáveis CSS) - a implementar

## Funções Auxiliares no inicial.view.js

```javascript
// Exibir animal aleatório
window.inicialView.exibirProximoAnimal();

// Exibir animal específico por ID
await window.inicialView.exibirAnimalPorId(5);
```

## Exemplo Completo de Implementação

Veja o arquivo `inicial.view.js` para um exemplo completo de implementação com:
- Carregamento de dados da API
- Exibição de animal aleatório
- Navegação entre animais
- Gerenciamento de eventos

## Dependências

- Axios (para requisições HTTP)
- Font Awesome (para ícones)
- AnimaisUsecase
- LocaisUsecase

## Navegadores Suportados

Todos os navegadores modernos que suportam:
- Custom Elements v1
- Shadow DOM v1
- ES6 Modules
