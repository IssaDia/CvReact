import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';




class Profil extends React.Component{


    render() 
        {
            return(
                <>
                <h5>Je suis Développeur Web</h5>
                <hr></hr>
                <p>Bonjour, je m'appelle <strong>Issa Dia</strong> et j'habite à <strong>Lyon</strong> depuis 3 ans. J'ai commencé mon parcours dans la <strong>gestion de paie</strong> et
                la <strong>comptabilité</strong> mais j'ai choisi de faire une reconversion dans le domaine de l'<strong>informatique</strong> en <strong>2018</strong> car je n'étais plus épanoui dans ce domaine.<br /> 
                 J'ai découvert le métier de <strong>développeur</strong> par le biais d'un ami qui est développeur freelance qui m'a montré son quotidien et cela m'a tout de suite interessé.<br /> 
                 J'ai donc décidé d'effectuer une rupture conventionnelle et d'effectuer une formation de <strong>Développeur Web/Web mobile</strong> de niveau <strong>Bac+2</strong> au sein de <strong>Human Booster </strong>
                 que j'ai validé et qui m'a permis de faire un stage trés interessant au sein de la start-up <strong>Ido Data</strong>.<br />  Etant passionné de <strong>voyages</strong>, suite à mon diplome, je suis parti plusieurs semaines en 
                 <strong>Asie</strong> avec mon ordinateur pour approfondir ce que j'avais appris en cours.<br />  A mon retour, j'ai eu l'opportunité d'intégrer <strong>Business et Décision</strong> afin d'intégrer une équipe devant se charger de projets sur le CMS <strong>Magento</strong>. Cette expérience m'a permise de découvrir le monde des <strong>ESN</strong> et de participer activement
                  à plusieurs étapes de  l'élaboration d'une démo pour un client reconnu.<br />  Suite à ce projet j'ai décidé d'acquérir de nouvelles compétences sur les <strong>Framework Js</strong> en intégrant une formation de 
                  <strong>Développeur Front End Avancé</strong> d'une durée d'un mois.<br />  Ayant obtenu ma <strong>certification</strong> pour cette formation, je suis actuellement à la recherche d'un poste de <strong>développeur</strong> 
                  sur une des deux technologies que j'affectionne particuliérement qui sont <strong>React</strong> et Symfony.<br />  Je suis actuellement entrain de travailler sur des applications qui utlisent ces deux technos et dont vous pouvez 
                  voir l'avancée sur mon <strong>portfolio</strong> :-)
                  </p>
                </>
                
            )      
    }

}

// ========================================
  
ReactDOM.render(
    <Profil />
        ,
        document.getElementById('root')
        );

  export default Profil;