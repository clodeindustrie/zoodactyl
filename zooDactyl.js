"use strict";
XML.ignoreWhitespace = false;
XML.prettyPrinting = false;
var INFO =
<plugin name="Zootool" version="0.1"
        href=""
        summary="Tools for Zootool"
        xmlns={NS}>
    <author email="clodeindustrie@gmail.com">Clodeindustrie</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Pentadactyl" min-version="1.0"/>
    <p>
        Tools for Zootool on pentadactyl
    </p>
    <item>
        <tags>'ht' 'heart'</tags>
        <spec>'heart' 'ht'</spec>
        <description>
            <p>
                Bookmark the current page in Your zootool account if your logged in.
            </p>
        </description>
    </item>
    <item>
        <tags>'zt' 'zootool'</tags>
        <spec>'zootool' 'zt'</spec>
        <description>
            <p>
                Open your zoo.
            </p>
        </description>
    </item>
</plugin>;

function heart(){
    var d = buffer.doc;
    var z = d.createElement('script');
    var b = d.body;
    var l = d.location;

    try {
        if(!b) throw(0);
        z.setAttribute('src','http://zootool.com/read-later/js/');
        b.appendChild(z);
        dactyl.echomsg("Page Bookmarked");
    } catch(e) {
        dactyl.echomsg('Please wait until the page has loaded.');
    }
}
var description = "Bookmark the current page in Your zootool account if your logged in";

group.commands.add
(
    [ "heart", "ht" ], // command name
    description,       // its description
    heart,              // its implementation
    { },               // extra stuff (require at least one argument)
    true               // replace the current implementation
);

group.commands.add
(
    [ "zootool", "zt" ], // command name
    "Open your zoo",       // its description
    function(){ 
        return dactyl.open("http://zootool.com/zoo", dactyl.NEW_TAB); 
    },             // its implementation
    { },               // extra stuff (require at least one argument)
    true               // replace the current implementation
);
