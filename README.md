# Prazer-UFBA
Aplicativo com o foco em reunir o máximo de informações a respeito da UFBA em um único lugar, para que os estudantes possam obter, em primeira mão, informações diversas a respeito da universidade, assim como seus órgãos, suas instâncias, setores, oportunidades, infraestrutura, etc. 
# Como compilar?
1. Primeiramente instale o [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).
2. Com o Sidekick instalado, crie um projeto (no botão "Create App") com as configurações a seguir:

![](https://i.imgur.com/lydqYOB.png)

3. Feche o Sidekick, entre na pasta onde o projeto foi criado, abra a pasta "app" e delete tudo que foi gerado dentro dela.
4. Clone o repositorio dentro da pasta "app" utilizando o comando `git clone https://github.com/prazer-ufba/Prazer-UFBA.git .` em um terminal com o git instalado.
5. Abra o sidekick, entre no projeto e no canto esquerdo do aplicativo, abra a pagina de plugins. Dentro dessa pagina, va para a sessão "Available" e instale as seguintes dependencias digitando seus respectivos nomes e clicando no botão "Install":
* nativescript-cardview
* nativescript-image-zoom
* OBS: Caso queira adicionar alguma outra dependencia, favor editar esse documento.
6. Apartir de agora já é possivel instalar o aplicativo no seu aparelho. Para isso é preciso abrir o Sidekick, abrir o projeto e no canto esquerdo do aplicativo, abrir a paginaa "Devices". Já nessa pagina, conecte o seu celular no computador e ja com o celular conectado será possivel selecionar o mesmo e testar o aplicativo pressionando o botão "Run on Device".
7. Pronto! Agora é so mecher no codigo a vontade e usar o Sidekick para testar suas mudanças no seu aparelho.

OBS: Quando você clicar para testar o aplicativo, o Sidekick iniciará o "LiveSync" que irá refletir as mudanças no código no aplicativo de maneira automatica (Quando você mecher no arquivo e salvar ele o Sidekick já irá levar as mudanças para o seu celular automaticamente). 
# Como fazer para o Sidekick reconhecer meu celular?
### Android
Caso você tenha um dispositivo android, habilite o modo de desenvolvedor seguindo [esse tutorial](https://www.techtudo.com.br/dicas-e-tutoriais/noticia/2014/10/como-ativar-o-modo-desenvolvedor-no-android.html), ligue a "Depuração USB" no menu "Opções do Desenvolvedor", e quando conectar o celular no computador com o Sidekick aberto e o dispositivo desbloqueado permita que o computador faça alterações no dispositivo.
### iPhone
Caso você tenha um dispositivo IOS, favor instalar o iTunes e posteriormente seguir [esse tutorial](https://www.nativescript.org/blog/develop-ios-apps-on-windows-with-nativescript-sidekick) (em inglês).