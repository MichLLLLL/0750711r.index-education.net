IE.fModule({f:function(exports,require,module,global){'use strict';module.exports = function (lObjetImageConnexion) {
var TypeArrierePlanAuthentification = require('TypeArrierePlanAuthentification.js').TypeArrierePlanAuthentification
        var ObjetImageConnexion = require('ObjetImageConnexion.js');
        if (!ObjetImageConnexion) ObjetImageConnexion = lObjetImageConnexion;

        var imagesExtra = {
'2-14':{ //14/3/2024
            srcImage: 'ressources/piday-texte.svg',
            urlImageFond: 'ressources/pi-day-bg2024.png',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'6-7':{ //7/7/2024
            srcImage: 'ressources/ete20242.svg',
            urlImageFond: 'ressources/bkg-ete2024.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Cover',
avecLien: false
},

'7-30':{ //30/8/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'7-31':{ //31/8/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-1':{ //1/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-2':{ //2/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-3':{ //3/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-4':{ //4/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-5':{ //5/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-6':{ //6/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-7':{ //7/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-8':{ //8/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-9':{ //9/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-10':{ //10/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-11':{ //11/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-12':{ //12/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-13':{ //13/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-14':{ //14/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'8-15':{ //15/9/2024
            srcImage: 'ressources/visu-rentree-24.svg',
            urlImageFond: 'ressources/bkg-rentree-24.svg',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: false
},

'9-2':{ //2/10/2024
            srcImage: 'ressources/mots-en-or-2024.gif',
            urlImageFond: 'ressources/bkg-mots-en-or-2024.png',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: true,
            lien: 'https://www.lesmotsenor.org/enseignant/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=banniere_pronote_lmeo_2025_oct_2024',
            texteLien: 'En savoir plus sur le concours Les Mots en Or',
            suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=motsenor24',
            couleurLien: '#276b99',
            bottomLien: '3%',
            leftLien: '42%',
            tailleLien: '100%'
},

'9-3':{ //3/10/2024
            srcImage: 'ressources/mots-en-or-2024.gif',
            urlImageFond: 'ressources/bkg-mots-en-or-2024.png',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: true,
            lien: 'https://www.lesmotsenor.org/enseignant/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=banniere_pronote_lmeo_2025_oct_2024',
            texteLien: 'En savoir plus sur le concours Les Mots en Or',
            suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=motsenor24',
            couleurLien: '#276b99',
            bottomLien: '3%',
            leftLien: '42%',
            tailleLien: '100%'
},

'9-4':{ //4/10/2024
            srcImage: 'ressources/mots-en-or-2024.gif',
            urlImageFond: 'ressources/bkg-mots-en-or-2024.png',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: true,
            lien: 'https://www.lesmotsenor.org/enseignant/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=banniere_pronote_lmeo_2025_oct_2024',
            texteLien: 'En savoir plus sur le concours Les Mots en Or',
            suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=motsenor24',
            couleurLien: '#276b99',
            bottomLien: '3%',
            leftLien: '42%',
            tailleLien: '100%'
},

'9-5':{ //5/10/2024
            srcImage: 'ressources/mots-en-or-2024.gif',
            urlImageFond: 'ressources/bkg-mots-en-or-2024.png',
            couleurConnexion: '#ffffff',
            classImageFond: 'Repeat',
avecLien: true,
            lien: 'https://www.lesmotsenor.org/enseignant/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=banniere_pronote_lmeo_2025_oct_2024',
            texteLien: 'En savoir plus sur le concours Les Mots en Or',
            suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=motsenor24',
            couleurLien: '#276b99',
            bottomLien: '3%',
            leftLien: '42%',
            tailleLien: '100%'
}

};
        ObjetImageConnexion.setDefinitionImagesExtra(imagesExtra);

        var lImages = [];

        lImages[TypeArrierePlanAuthentification.Louvre] =[{//Semaine 1

        srcImage: 'ressources/ziboulateur.svg',
        urlImageSuite: 'ressources/ziboulateur-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_16',
            
}, {//Semaine 2

        srcImage: 'ressources/brimbelle.svg',
        urlImageSuite: 'ressources/brimbelle-suite.svg',
        urlImageFond: 'ressources/region-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_17',
            
}, {//Semaine 3

        srcImage: 'ressources/bijou.svg',
        urlImageSuite: 'ressources/bijou-suite.svg',
        urlImageFond: 'ressources/emprunt-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_18',
            
}, {//Semaine 4

        srcImage: 'ressources/messeoir.svg',
        urlImageSuite: 'ressources/messeoir-suite.svg',
        urlImageFond: 'ressources/ancien-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_19',
            
}, {//Semaine 5

        srcImage: 'ressources/belletrien.svg',
        urlImageSuite: 'ressources/belletrien-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_20',
            
}, {//Semaine 6

        srcImage: 'ressources/schlouck.svg',
        urlImageSuite: 'ressources/schlouck-suite.svg',
        urlImageFond: 'ressources/region-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_21',
            
}, {//Semaine 7

        srcImage: 'ressources/piece.svg',
        urlImageSuite: 'ressources/piece-suite.svg',
        urlImageFond: 'ressources/emprunt-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_22',
            
}, {//Semaine 8

        srcImage: 'ressources/degammer.svg',
        urlImageSuite: 'ressources/degammer-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_23',
            
}, {//Semaine 9

        srcImage: 'ressources/cheni.svg',
        urlImageSuite: 'ressources/cheni-suite.svg',
        urlImageFond: 'ressources/region-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_24',
            
}, {//Semaine 10

        srcImage: 'ressources/marmelade.svg',
        urlImageSuite: 'ressources/marmelade-suite.svg',
        urlImageFond: 'ressources/emprunt-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_25',
            
}, {//Semaine 11

        srcImage: 'ressources/tchouler.svg',
        urlImageSuite: 'ressources/tchouler-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_26',
            
}, {//Semaine 12

        srcImage: 'ressources/empeguer.svg',
        urlImageSuite: 'ressources/empeguer-suite.svg',
        urlImageFond: 'ressources/region-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_27',
            
}, {//Semaine 13

        srcImage: 'ressources/zwanze.svg',
        urlImageSuite: 'ressources/zwanze-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_29',
            
}, {//Semaine 14

        srcImage: 'ressources/zwanze.svg',
        urlImageSuite: 'ressources/zwanze-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_29',
            
}, {//Semaine 15

        srcImage: 'ressources/marri.svg',
        urlImageSuite: 'ressources/marri-suite.svg',
        urlImageFond: 'ressources/ancien-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_30',
            
}, {//Semaine 16

        srcImage: 'ressources/scapper.svg',
        urlImageSuite: 'ressources/scapper-suite.svg',
        urlImageFond: 'ressources/region-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_31',
            
}, {//Semaine 17

        srcImage: 'ressources/rutabaga.svg',
        urlImageSuite: 'ressources/rutabaga-suite.svg',
        urlImageFond: 'ressources/emprunt-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_32',
            
}, {//Semaine 18

        srcImage: 'ressources/longanimite.svg',
        urlImageSuite: 'ressources/longanimite-suite.svg',
        urlImageFond: 'ressources/rare-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_33',
            
}, {//Semaine 19

        srcImage: 'ressources/longcrayon.svg',
        urlImageSuite: 'ressources/longcrayon-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_34',
            
}, {//Semaine 20

        srcImage: 'ressources/bouiner.svg',
        urlImageSuite: 'ressources/bouiner-suite.svg',
        urlImageFond: 'ressources/region-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_35',
            
}, {//Semaine 21

        srcImage: 'ressources/ruban.svg',
        urlImageSuite: 'ressources/ruban-suite.svg',
        urlImageFond: 'ressources/emprunt-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_36',
            
}, {//Semaine 22

        srcImage: 'ressources/belitre.svg',
        urlImageSuite: 'ressources/belitre-suite.svg',
        urlImageFond: 'ressources/ancien-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_37',
            
}, {//Semaine 23

        srcImage: 'ressources/barjaquer.svg',
        urlImageSuite: 'ressources/barjaquer-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_38',
            
}, {//Semaine 24

        srcImage: 'ressources/oaristys.svg',
        urlImageSuite: 'ressources/oaristys-suite.svg',
        urlImageFond: 'ressources/rare-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_39',
            
}, {//Semaine 25

        srcImage: 'ressources/esquicher.svg',
        urlImageSuite: 'ressources/esquicher-suite.svg',
        urlImageFond: 'ressources/region-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_40',
            
}, {//Semaine 26

        srcImage: 'ressources/enfirouaper.svg',
        urlImageSuite: 'ressources/enfirouaper-suite.svg',
        urlImageFond: 'ressources/francophonie-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_41',
            
}, {//Semaine 27

        srcImage: 'ressources/paprika.svg',
        urlImageSuite: 'ressources/paprika-suite.svg',
        urlImageFond: 'ressources/emprunt-background.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, jouez chaque semaine avec l&#146;un de ces mots rares, anciens ou issus de la francophonie qui font la richesse de la langue française.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt23_42',
            
}, {//Semaine 28

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 29

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 30

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 31

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 32

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 33

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 34

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 35

        srcImage: 'ressources/ete20242.svg',
        urlImageFond: 'ressources/bkg-ete2024.svg',
        couleurConnexion: '#ffffff',
        classImageFond: 'Cover',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 36

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 37

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 38

        srcImage: 'ressources/superflu-1.svg',
        urlImageSuite: 'ressources/superflu-1-suite.svg',
        urlImageFond: 'ressources/bkg-bleu.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_01',
            
}, {//Semaine 39

        srcImage: 'ressources/anglicisme-1.svg',
        urlImageSuite: 'ressources/anglicisme-1-suite.svg',
        urlImageFond: 'ressources/bkg-orange.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_02',
            
}, {//Semaine 40

        srcImage: 'ressources/tic-1.svg',
        urlImageSuite: 'ressources/tic-1-suite.svg',
        urlImageFond: 'ressources/bkg-rouge.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_03',
            
}, {//Semaine 41

        srcImage: 'ressources/superflu-2.svg',
        urlImageSuite: 'ressources/superflu-2-suite.svg',
        urlImageFond: 'ressources/bkg-bleu.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_04',
            
}, {//Semaine 42

        srcImage: 'ressources/anglicisme-2.svg',
        urlImageSuite: 'ressources/anglicisme-2-suite.svg',
        urlImageFond: 'ressources/bkg-orange.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_05',
            
}, {//Semaine 43

        srcImage: 'ressources/tic-2.svg',
        urlImageSuite: 'ressources/tic-2-suite.svg',
        urlImageFond: 'ressources/bkg-rouge.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_06',
            
}, {//Semaine 44

        srcImage: 'ressources/superflu-3.svg',
        urlImageSuite: 'ressources/superflu-3-suite.svg',
        urlImageFond: 'ressources/bkg-bleu.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_07',
            
}, {//Semaine 45

        srcImage: 'ressources/anglicisme-3.svg',
        urlImageSuite: 'ressources/anglicisme-3-suite.svg',
        urlImageFond: 'ressources/bkg-orange.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_08',
            
}, {//Semaine 46

        srcImage: 'ressources/superflu-4.svg',
        urlImageSuite: 'ressources/superflu-4-suite.svg',
        urlImageFond: 'ressources/bkg-bleu.svg',
        widthImageSuite: 1442,
        heightImageSuite: 600,
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
lienLogo: 'https://www.projet-voltaire.fr/',
            styleLogo: 'background-image: url(ressources/logo-projet-voltaire.png);width: 100px;height: 85px;',
            suiviLogo: 'https://www.index-education.com/swie/tl.php?ln=volt_logo',
            avecLienSuite: true,
            texteLienSuite: 'Avec le Projet Voltaire et PRONOTE, découvrez comment améliorer votre expression orale.',
            lienSuite: 'https://www.projet-voltaire.fr/pronote/?utm_source=pronote&utm_medium=referral_partner&utm_campaign=pronote_partenariat_pronote_2024',
            suiviLienSuite: 'https://www.index-education.com/swie/tl.php?ln=volt24_08',
            
}, {//Semaine 47

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 48

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 49

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 50

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 51

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 52

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}, {//Semaine 53

        srcImage: 'ressources/neutre.png',
        urlImageFond: 'ressources/neutre-bkg.png',
        couleurConnexion: '#ffffff',
        classImageFond: 'Repeat',
avecLien: false,
            avecLienSuite: false
}];



        ObjetImageConnexion.setDefinitionImages(lImages);
}
},fn:'imagesconnexion.js'});