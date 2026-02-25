# Proteção Animal

Bem-vindo ao projeto Proteção Animal! Este é um site dedicado a facilitar doações, promover adoção de animais e compartilhar as ações da ONG com a comunidade.

## Objetivo

Conectar pessoas apaixonadas por animais com ONGs e projetos que promovem sua proteção e bem-estar.

## Funcionalidades

- **Doação de Financeira**: Ajude com doação de diferentes valores.
- **Adoção**: Ferramentas para entrar em contato com responsáveis por adoções.
- **Galeria de Ações**: Mostre os eventos e atividades realizados pela ONG.

## Tecnologias Utilizadas

- **Frontend**: React
- **Framework CSS**: Tailwind CSS
- **Backend**: Java
- **Banco de Dados**: MySql
- **Hospedagem**: HostGator

## Como Rodar o Projeto Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/edjunior-nascimento/protecao-animal-web.git
   ```
2. Instale as dependências:
   ```bash
   cd protecao-animal
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse no navegador: `http://localhost:3000`
### rodar Backend Mockado
1. Instale as dependências:
   ```bash
   cd backend-mock
   npm install
   cd..
   ```
2. Inicie o servidor:
   ```bash
   npm run start:back
   ```
3. Acesse no navegador: `http://localhost:3001`
<!-- ## Estrutura de Pastas Proposta

```plaintext
src/
├── components/              # Componentes reutilizáveis
│   ├── ui/                 # Componentes básicos
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   └── Modal/
│   ├── layout/             # Layout components
│   │   ├── Header/         # cabecalho.component.js → Header
│   │   ├── Footer/         # rodape.component.js → Footer
│   │   └── Navigation/
│   ├── features/           # Componentes específicos por feature
│   │   ├── adocao/
│   │   │   ├── CardAdocao/ # card-adocao.component.js
│   │   │   ├── ListaAnimais/
│   │   │   └── FiltrosAdocao/
│   │   └── galeria/
│   │       ├── CardFoto/   # card-foto.component.js
│   │       ├── CardGaleria/ # card-galeria.component.js
│   │       └── GridGaleria/
│   └── shared/             # Componentes compartilhados
│       └── Paginacao/      # paginacao.js → Paginacao
├── pages/                  # Views principais
│   ├── InicialPage/        # inicial/
│   ├── AdocaoPage/         # adocao/
│   ├── DetalhesAdocaoPage/ # detalhes-adocao/
│   ├── GaleriaPage/        # galeria/
│   ├── DoacaoPage/         # doacao/
│   ├── SobrePage/          # sobre/
│   └── forms/              # Páginas de formulários
│       ├── FormularioAdocaoPage/     # formulario-adocao/
│       ├── FormularioCastracaoPage/  # formulario-castracao/
│       └── FormularioDoacaoPage/     # formulario-doacao/
├── domain/                 # Lógica de negócio (mantém estrutura legacy)
│   ├── entities/          # models/
│   │   ├── Adocao.ts      # adocao.model.js
│   │   ├── Animal.ts      # animal.model.js
│   │   └── Galeria.ts     # galeria.model.js
│   ├── enums/             # enums/ (mantém igual)
│   │   └── porte.enum.ts  # porte.enum.js
│   └── use-cases/         # use-case/ (mantém lógica)
│       ├── animais.usecase.ts
│       ├── galeria.usecase.ts
│       └── locais.usecase.ts
├── infrastructure/         # Services e adapters externos
│   ├── services/          # services/ (mantém estrutura)
│   │   ├── animais.service.ts
│   │   ├── galeria.service.ts
│   │   └── locais.service.ts
│   ├── mappers/           # mapper/ (mantém)
│   │   ├── adocao.mapper.ts
│   │   └── galeria.mapper.ts
│   └── api/               # Configurações de API
│       └── client.ts
├── hooks/                 # Custom hooks React
│   ├── useAnimais.ts
│   ├── useGaleria.ts
│   └── usePaginacao.ts
├── context/               # Context API para estados globais
│   ├── AnimaisContext.tsx
│   └── AppContext.tsx
├── types/                 # TypeScript definitions
│   ├── api.types.ts
│   └── common.types.ts
├── utils/                 # Utilitários
│   └── helpers.ts
├── styles/               # Estilos globais
│   ├── globals.css
│   ├── variables.css
│   └── components.css
└── assets/               # Recursos estáticos
    ├── images/
    └── icons/
``` -->

## Contribuidores

- **Mara Luiza**: Designer UX/UI
- **Edjofra**: Desenvolvedor Full Stack.
- **Gabriel**: Desenvolvedor Full Stack.
- **Nilton**: Desenvolvedor Full Stack.

Agradecemos por conferir o projeto! Caso queira contribuir, veja o arquivo [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE.md para mais informações.

---

Esperamos que você goste do projeto e ajude a fazer a diferença para os animais! 🐾