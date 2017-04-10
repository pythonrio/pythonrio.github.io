# Job Board

Para incluir uma nova oportunidade de trabalho seguir os seguintes passos:


 1. Criar um diretório no caminho /content/jobs do projeto seguindo o seguinte critério YYYY-MM-DD-NOME_EMPRESA .
 **Ex**: 2017-03-31-minhaempresa
> Se tiver mais de uma oportunidade colocar um sufixo 1,2,3
> **ex**: YYYY-MM-DD-NOME_EMPRESA-1, YYYY-MM-DD-NOME_EMPRESA-2, YYYY-MM-DD-NOME_EMPRESA-3

 2. No diretório recém criado incluir um arquivo chamado **contents.lr**

 3. No arquivo **contents.lr** incluir os dados da empresa e da oportunidade como no exemplo abaixo:

```
_model: job
---
date: 18 de Fevereiro de 2017
---
title: Tancman
---
company: Tancman
---
company_email: rtancman@gmail.com
---
company_website: http://www.tancman.com.br
---
company_country: Brasil
---
company_country_abbreviation: BR
---
company_city: Rio de Janeiro
---
company_address: Rua São José, 90, 2º andar
---
company_photo: /static/img/company/tanc.png
---
job: Software Developer
---
job_level: Jr.
---
job_photo_banner: /static/img/cover/developer.jpg
---
job_description:
TEXTO EM MARKDOWN COM OS REQUISITOS DA VAGA
```
> Sempre adicionar as imgs nos diretorios **/static/img/cover/** e **/static/img/company/**
