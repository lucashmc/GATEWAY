# Gateway (projeto)

Simple API Gateway + two microservices example (Português).

Participanetes do projeto: 
NOME: Lucas Henrique Moraes Costa  
NOME: João victor Carvalho Da Silva 
NOME:  Mathes Olavo 
## Estrutura

- `gateway/` - servidor proxy (porta 3000)
- `users-service/` - serviço de exemplo (porta 3001)
- `products-service/` - serviço de exemplo (porta 3002)

## Pré-requisitos

- Node.js (v16+ recomendado)
- npm

## Instalação

Na raiz do repositório, instale dependências para cada projeto:

```bash
cd gateway
npm install
cd ../users-service
npm install
cd ../products-service
npm install
```

## Execução (local)

Abra três terminais separados e execute:

```bash
node users-service/index.js    # roda Users Service (3001)
node products-service/index.js # roda Products Service (3002)
node gateway/index.js          # roda Gateway (3000)
```

Ou iniciar apenas o gateway:

```bash
cd gateway
npm start
```

## Testes rápidos

Via Gateway:

```bash
curl http://localhost:3000/users/
curl http://localhost:3000/products/
```

Direto nos serviços:

```bash
curl http://localhost:3001/
curl http://localhost:3002/
```

No PowerShell use `Invoke-RestMethod` em vez de `curl`.

## Scripts úteis / Sugestões

- Para iniciar tudo junto, você pode adicionar `concurrently` ou `npm-run-all` e um script `start:all`.
- Exemplo rápido: `npm i -D concurrently` e em `package.json`:

```json
"scripts": {
  "start:all": "concurrently \"node users-service/index.js\" \"node products-service/index.js\" \"node gateway/index.js\""
}
```

## Subir para o Git

No diretório do projeto:

```bash
git init
git add .
git commit -m "Add gateway and services example"
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## Observações

- O `gateway` usa `http-proxy-middleware` para rotear `/users` e `/products`.
- Ajuste portas e targets conforme necessário.
# GATEWAY
