const St = imports.gi.St;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const GLib = imports.gi.GLib;

let panelButton, panelButtonText, percentage, icon;
function setButtonText(){
    let MAC_ADDR = "bluetooth_battery [HEADPHONES_MAC_ADDRESS]"; //INSERT YOUR MAC ADDRESS HERE
    var [ok, out, err, exit] = GLib.spawn_command_line_sync(MAC_ADDR);
    panelButtonText.set_text((out.toString()).substring(38,42));
    return true;
}
//Funzione inizializzatrice
function init(){

    //Inizializzo i panel:
    panelButton = new St.Bin({
        style_class : "panel-button"
    });
    panelButtonText = new St.Label({
        style_class : "labelBluetooth",
        text : "Starting..."
    });
    icon = new St.Bin({
        style_class : "icon"
    });
    //Inserisco il label nel button
    panelButton.set_child(panelButtonText);
}
//Funzione avviata all'abilitazione dell'estensione
function enable(){
    Main.panel._rightBox.insert_child_at_index(panelButton,1);
    Main.panel._rightBox.insert_child_at_index(icon,1);
    setButtonText();
    percentage = Mainloop.timeout_add_seconds(300.0, setButtonText);
}

//Funzione avviata alla disabilitazione dell'estensione
function disable(){
    Mainloop.source_remove(percentage);
    Main.panel._rightBox.remove_child(panelButton);
}
