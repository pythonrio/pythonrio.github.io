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

## Buildando
O branch master deste repositório contém os estáticos gerados pelo Lektor que serão servidos pelo GitHub Pages. Para gerar novos estáticos basta executar o seguinte comando no terminal:
```
lektor build -O /path/to/build/
```
Sendo que o diretório informado depois do parâmetro -O irão conter os novos estáticos gerados pelo Lektor.

## Estilização (CSS)
Utilizamos o LESS e um plugin para minificação:

```
npm install -g less
npm install -g less-plugin-clean-css
```

Enquanto não automatizamos esse processo, para gerar o CSS é preciso executar o seguinte comando dentro da pasta `static`:

```
lessc --clean-css="-b --compatibility=ie8 --advanced" less/main.css.less css/main.css
```