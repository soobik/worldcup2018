# worldcup2018
Gestion des matches pour la coupe du monde 2018

###
En utilisant les connaissances acquises vous devez créer une page simple qui permet d'afficher une liste d’éléments.

Ce projet sera utilisé pour au autre projet.

# Le projet :

Faire une liste des équipes participantes à la coupe du monde de football 2018.

Vos sources de données doivent être au format JSON.

#
# Les attentes et points de contrôles :

- En terme de gestion de projet :

* Identifier les tâches à éfféctuer.
* Réfléchir collectivement à une structure pour le fichier json.
* Chaque apprenant doit ajouter au moins 1 entrée dans le fichier JSON, qui va contenir la liste des équipes.
* Partager les tâches entre les apprenants.

- En terme de production :

/!\ Travailler collaborativement sur le code avec git (notions : fork, pull request).
* Avoir un code simple et efficace.
* Avoir un code commenté.
* Dans le code différencier l'affichage du traitement.
* Mettre à jour le README avec une partie "TODO".
* Chaque apprenant qui complète une tâche doit la marquer comme "Terminé" dans le README.

###
# Démarrage du projet
* Fork du projet initial sur votre compte github
* Clonage du projet sur votre ordi: 
    git clone https://github.com/<votre-repository>/worldcup2018.git
* Ajoutez à votre fork le remote du projet d'origine
    git remote add worldcup2018 https://github.com/soobik/worldcup2018.git
# N'oubliez pas vos git add et git commit régulier
# Push
* Mettez à jour votre fork en local: 
    git fetch worldcup2018
* Fusionnez (merge) maintenant votre copie locale avec le projet d'origine: 
    git merge worldcup2018/master
* Validez vos changements si vous avez ajouté des fichers
* en cas modification d'un fichier sauter cette etape.
    git add .
    git commit -m "ajout de nouveaux fichiers" 
* Envoyez vos changements sur votre github
    git push
* Faire un pull request via le site ou en ligne de commande, mais la j'ai pas trouvé.

/!\ AVANT DE SAISIR TOUTES COMMANDES

/!\ VEUILLEZ BIEN REFLECHIR A CE QUE VOUS VOULEZ EFFECTUER COMME TACHE

/!\ DANS LE DOUTE DEMANDER A UN AMI :-)

###
# TODO : 
* Faire une structure de fichier efficace pour ce projet. [NOT OK]
* Récolter les informations sur les équipes. [NOT OK]

* Liste des equipes : [OK]

* Alimenter ce TODO. [NOT OK]

* Retirer les routes de app.js et creer un répertoire /routes
* Creer un fichier equipes.js OK
* Creer un fichier groups.js OK
* Creer un fichier knockout.js OK
* Creer un fichier stadiums.js OK
