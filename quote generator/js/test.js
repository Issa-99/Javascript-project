const myH1 = document.getElementById('00');
const myH2 = document.getElementById('03');
const mydiv = document.getElementById('123');


const generateButon = document.getElementById('01');
let hex1 = "";
let hex2 = "";

const citationsMotivantes = [
    {
      citation: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
      auteur: "Albert Schweitzer"
    },
    {
      citation: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
      auteur: "Steve Jobs"
    },
    {
      citation: "Ne baissez jamais les bras. Les seules personnes qui échouent sont celles qui abandonnent.",
      auteur: "Hikaru Nakamura"
    },
    {
      citation: "La motivation vous sert de départ. L'habitude vous fait continuer.",
      auteur: "Jim Ryun"
    },
    {
      citation: "Ne rêvez pas votre vie, vivez votre rêve.",
      auteur: "Mark Twain"
    },
    {
      citation: "Le succès ne consiste pas à ne jamais faire d'erreur, mais à ne jamais faire la même erreur deux fois.",
      auteur: "George Bernard Shaw"
    },
    {
      citation: "Chaque jour est une nouvelle chance de vous rapprocher de vos objectifs. Ne laissez pas vos peurs vous éloigner de vos opportunités.",
      auteur: "Inconnu"
    },
    {
      citation: "Le succès, c'est tomber sept fois et se relever huit.",
      auteur: "Proverbe japonais"
    },
    {
      citation: "La persévérance est la clé de la réussite.",
      auteur: "Alexander Graham Bell"
    },
    {
      citation: "L'échec est le fondement de la réussite.",
      auteur: "Lao Tseu"
    },
    {
      citation: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
      auteur: "Winston Churchill"
    },
    {
      citation: "La motivation est ce qui vous met en route, l'habitude est ce qui vous fait continuer.",
      auteur: "Jim Ryun"
    },
    {
      citation: "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.",
      auteur: "Proverbe chinois"
    },
    {
      citation: "Faites de votre mieux là où vous êtes. C'est là que commence le succès.",
      auteur: "Zig Ziglar"
    },
    {
      citation: "Le succès n'est pas une destination, c'est un voyage.",
      auteur: "Zig Ziglar"
    },
    {
      citation: "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi.",
      auteur: "Georges Clemenceau"
    },
    {
      citation: "Visez la lune. Même si vous la manquez, vous atterrirez parmi les étoiles.",
      auteur: "Les Brown"
    },
    {
      citation: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
      auteur: "Winston Churchill"
    },
    {
      citation: "L'échec est l'opportunité de recommencer de manière plus intelligente.",
      auteur: "Henry Ford"
    },
    {
      citation: "Les seules limites qui existent sont celles que vous vous imposez.",
      auteur: "Les Brown"
    }
  ];


  function generatequote(){
    let quoteid = Math.floor(Math.random()*citationsMotivantes.length);
    let citation = citationsMotivantes[quoteid];

        myH1.innerHTML = citation.citation;
        myH2.innerHTML = citation.auteur;
        
  }

  function generate(){

    const hexNumber = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    hex1 = "";
    hex2 = "";
    
    for(let i = 0; i <6; i++){

        hex1 =  hex1 +  hexNumber[Math.floor(Math.random()*hexNumber.length)];
        hex2 =  hex2  +  hexNumber[Math.floor(Math.random()*hexNumber.length)] 
    }
    

    document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`;

    }

  generateButon.addEventListener('click',generatequote);
  generateButon.addEventListener('click',generate);
