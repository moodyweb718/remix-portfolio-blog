import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import BlogRoll from "./blogroll";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Index() {
  const user = useOptionalUser();
  return (
    <body>
        
        {/* NAVIGATION BAR*/}
        
        <NavBar />
  
        {/*HERO SECTION*/}

        <section className="hero is-large is-link">
            <div className="hero-body has-text-centered">
                <p className="title">Blog Portfolio App</p>
                <p className="subtitle">Where Blogging Begins</p>
            </div>
        </section>
        
        <section className="section is-three-fifths">
            <div className="article">
                <h2 className="title">Article Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus magna fringilla urna. Tristique senectus et netus et. Massa placerat duis ultricies lacus sed turpis. Aliquet nibh praesent tristique magna. Amet porttitor eget dolor morbi non. Leo in vitae turpis massa sed elementum tempus egestas. Est placerat in egestas erat imperdiet sed euismod nisi. Mattis rhoncus urna neque viverra justo nec ultrices. Diam volutpat commodo sed egestas. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Arcu cursus vitae congue mauris rhoncus. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Libero id faucibus nisl tincidunt eget nullam non nisi est. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Semper feugiat nibh sed pulvinar proin. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Sagittis purus sit amet volutpat consequat mauris. Id venenatis a condimentum vitae sapien pellentesque habitant.</p>

                <p>Nisi vitae suscipit tellus mauris. Eu lobortis elementum nibh tellus molestie nunc non blandit. Diam volutpat commodo sed egestas egestas fringilla. Sed felis eget velit aliquet. Feugiat scelerisque varius morbi enim. Volutpat odio facilisis mauris sit amet. Felis imperdiet proin fermentum leo vel orci porta. Turpis egestas integer eget aliquet nibh praesent. Tempor orci eu lobortis elementum nibh tellus. Nullam vehicula ipsum a arcu cursus vitae congue. Cursus turpis massa tincidunt dui ut ornare lectus. Enim tortor at auctor urna. Amet mattis vulputate enim nulla aliquet. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Orci sagittis eu volutpat odio. Justo eget magna fermentum iaculis eu non diam. Vel orci porta non pulvinar neque. Lacus viverra vitae congue eu consequat ac. Est velit egestas dui id ornare arcu odio ut.</p>

                <p>Orci eu lobortis elementum nibh tellus molestie. Viverra tellus in hac habitasse. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Condimentum lacinia quis vel eros donec. Vel pretium lectus quam id leo in vitae. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Curabitur vitae nunc sed velit. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Tristique nulla aliquet enim tortor at auctor urna nunc id. Neque gravida in fermentum et sollicitudin ac orci phasellus. Sit amet nulla facilisi morbi tempus. Donec et odio pellentesque diam volutpat. Vestibulum lorem sed risus ultricies. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>

                <p>Nibh tortor id aliquet lectus. Eleifend mi in nulla posuere. Rutrum quisque non tellus orci. Pellentesque habitant morbi tristique senectus et. Nibh ipsum consequat nisl vel pretium lectus quam id. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Neque convallis a cras semper auctor neque. Consequat interdum varius sit amet mattis vulputate enim nulla. Consectetur lorem donec massa sapien faucibus et molestie. Tincidunt ornare massa eget egestas purus viverra accumsan. Amet massa vitae tortor condimentum lacinia quis vel eros. Accumsan in nisl nisi scelerisque eu. Amet est placerat in egestas erat imperdiet sed euismod nisi. Mauris commodo quis imperdiet massa tincidunt nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Semper eget duis at tellus at urna condimentum. Ut lectus arcu bibendum at varius vel pharetra vel. Quis risus sed vulputate odio ut enim blandit volutpat.</p>

                <p>Convallis convallis tellus id interdum velit laoreet id donec. Lacus vel facilisis volutpat est velit egestas dui id. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Ultrices dui sapien eget mi proin sed libero enim sed. Id leo in vitae turpis massa sed. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Et ligula ullamcorper malesuada proin libero nunc. Sit amet risus nullam eget felis eget nunc lobortis. Id velit ut tortor pretium viverra suspendisse.</p>
            </div>
        </section>

        {/*FOOTER SECTION*/}
        
        <Footer />
  
    </body>
  );
}