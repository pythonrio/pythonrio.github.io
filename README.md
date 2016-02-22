# Site PythOnRio
Este repositório contém o site da comunidade [PythOnRio](http://pythonrio.github.io/). Sinta-se livre para forkar e colaborar \o/

## Instalação
Utilizamos o [Lektor](https://github.com/lektor/lektor) para gerar o site estático. Para instalar o projeto em seu ambiente execute:
```
pip install -r requirements.txt
```
Para rodar o projeto localmente, dentro do diretório _pythonrio/_, execute:
```
lektor server
```
E então, basta acessar _http://localhost:5000/_

## Sistemas Linux Debian-based
É necessára a instalação de um pacote de desenvolvimento para a instalação correta do Lektor e das outras dependências. Para isso, basta executar:
```
sudo apt-get install libffi-dev
```

## Buildando
O branch master deste repositório contém os estáticos gerados pelo Lektor que serão servidos pelo GitHub Pages. Para gerar novos estáticos basta executar o seguinte comando no terminal:
```
lektor build -O /path/to/build/
```
Sendo que o diretório informado depois do parâmetro -O irão conter os novos estáticos gerados pelo Lektor.

## Estilização (CSS)
Utilizamos o LESS e um plugin para minificação. Para poder usar, temos que instalar as dependências do npm:

```
npm install
```

Para rodar a compilação manualmente, é só usar o seguinte comando:

```
npm run build:css
```

Caso você queira rodar um watcher, que vai observar todos os arquivos less e compilá-los quando notar que você salvou algum deles, usa esse comando aqui, ó:

```
npm run watch:css
```
