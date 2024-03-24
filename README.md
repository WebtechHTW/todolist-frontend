# To-Do-Liste

Dies ist eine einfache To-Do-Liste, die Ihnen dabei hilft, Ihre Aufgaben zu organisieren.

## Inhaltsverzeichnis

- [To-Do-Liste](#to-do-liste)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Login und Registrieren](#login-und-registrieren)
  - [Neue To-Do anlegen](#neue-to-do-anlegen)
  - [Vorhandenen Task aktualisieren](#vorhandenen-task-aktualisieren)
  - [Task löschen bzw. alle Tasks löschen](#task-löschen-bzw-alle-tasks-löschen)
  - [To-Do als erledigt markieren](#to-do-als-erledigt-markieren)
  - [Technologien](#technologien)
  - [Installation](#installation)

## Homepage
![homepage](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/homepage.png)

## Login und Registrieren

Um die To-Do-Liste zu verwenden, müssen Sie sich zunächst anmelden oder registrieren.

1. Login
   + Wenn Sie schon einen Account haben, können Sie sich mit Ihren Anmeldeinformationen anmelden(siehe Bilder): ![Anmeldung](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/login.png)
   + Wenn es erfolgreich ist werden Sie zum  Dashboard weitergeleitet.![dashboard](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/dashboard.png)
   + Falls der Benutzername oder das Passwort falsch sind, wird dies angezeigt.![FehlerAnmeldung](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/loginFehler.png)
2. Registrieren
   +  Geben Sie einen Namen, einen Benutzernamen und ein Passwort ein.
   + Klicken Sie auf "Registrieren".
   + Wenn der Benutzername bereits vergeben ist, wird dies angezeigt.![FehlerRegistrieren](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/registrierenFehler.png)
   + Wenn Registration Erfolgreich ist, werden Sie zum `/Login` Seite weitergeleitet.

## Neue To-Do anlegen
Nachdem Sie sich angemeldet haben, können Sie eine neue To-Do-Liste erstellen, in der Sie Ihre Aufgaben verwalten können.

 1. Auf `Dashboard` Seite finden Sie den Button ![neu todo anlegen](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/delete_all_add_new_task.png), wenn Sie auf Button drücken, leitet es sich Ihnen zu `Neu Todo` Seite weitergeleitet. ![neuentodoanlegen](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/neuenTodo.png)
 2. Wenn Sie alle Information angegeben haben, drücken sie auf `Add` oder können Sie den Button `Zurück`  nutzen um zur vorherigen Seite zurückzukommen.
 3. Sie müssen Titel angeben um  den Task hinzuzufügen. Andere Informationen müssen sie nicht angeben.

## Vorhandenen Task aktualisieren

Sie können vorhandene Aufgaben aktualisieren, indem Sie sie bearbeiten und Änderungen vornehmen.

1. So sehen Sie `Dashboard` aus ![dashboard](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/dashboard_with_task.png), Sie können auf einen Task drücken, werden Sie zum  Bearbeitungsseite geleitet.![updateTask](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/updatetodo.png)
2. in der Seite können sie mit dem `Update` Button  den Task bearbeiten oder mit dem `zurück` Button um nach `Dashboard` zurückzugehen.
3. Sie können auch Task als erledigt markieren, dann wird das Task in `Dashboard`  mit gestrichen dargestellt.

## Task löschen bzw. alle Tasks löschen

Einzelne Aufgaben können gelöscht werden, oder Sie haben die Möglichkeit, alle Aufgaben auf einmal zu löschen.

1. Sie können jeden Task direkt in `Dashboard`  durch Anklicken des `Delete` Button ![deletebutton](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/deletebutton.png)  löschen.
2. Sie können auch im `Dashboard`  alle Tasks gleichzeitig löschen, indem Sie den `Delete All` Button ![deleteAll](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/deleteAllButton.png) nutzen

## To-Do als erledigt markieren

Markieren Sie Ihre Aufgaben als erledigt, um den Fortschritt zu verfolgen.
  + Um das Task als Erledigt zu markieren, klicken Sie einfach auf das Häkchen neben dem Task. ![checkbox](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/checkboxx.png)

## Technologien

Dieses Projekt verwendet Node.js und Angular für die Implementierung.

## Installation

1. Stellen Sie sicher, dass Node.js auf Ihrem System installiert ist. Sie können es von [nodejs.org](https://nodejs.org/) herunterladen und installieren.

2. Installieren Sie Angular CLI global, falls Sie es noch nicht installiert haben:
   ```bash
   npm install -g @angular/cli
3. Backend installieren
+ Klonen Sie das Backend Repository
    ```
    git clone git@github.com:WebtechHTW/todolist-backend.git
    ```
+ Navigieren Sie zum Backend-Verzeichnis
  ```
  cd todolist-backend
  ```
+ Installieren Sie Abhängigkeiten
  ```
  npm install
  ````
+ Starten Sie Backend
  ```
  npm start
  ```
+ Wenn Backend erfolgreich gestartet ist, wird es wie untere Bilder angezeigt.
 ![nodejsTerminal](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/nodejs_terminal.png) 
4. Frontend installieren
+ Klonen Sie das  Frontend Repository
   ```
   git clone git@github.com:WebtechHTW/todolist-backend.git
    ```
+ Navigieren Sie zum Frontend-Repository
  ```
  cd todolist-frontend
  ```
+ Installieren Sie Abhängigkeiten
  ```
  npm install
  ```
+ Starten Sie das Frontend
  ```
  ng serve
  ```
+ Öffnen Sie Ihren Browser und besuchen Sie [http://localhost:4200](http://localhost:4200), um die To-Do-Liste anzuzeigen.
![frontend_terminal](https://github.com/WebtechHTW/todolist-frontend/blob/main/bilder/frontend_terminal.png)
