import React, { Component } from 'react';
import '../css/style.css';
import davidabt_1 from "../img/davidabt_1.png";
import davidabt_2 from "../img/davidabt_2.png";


class About extends Component {
  render() {
    return (
    	<div className="aboutpage" id="aboutpage">
    	
    		<div className="title">
    			<h1>About Me</h1>
    		</div>

             <div className="row">

                <div className="col-1-of-2">
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, sagittis et dolor eu, blandit interdum nisl. Aliquam ultrices ut felis nec elementum. Maecenas auctor vitae tellus ut mattis. Curabitur ligula purus, tincidunt id accumsan a, mattis varius ipsum. Integer semper accumsan leo eget ultrices. Praesent a accumsan libero, ut tincidunt mauris. Integer at diam et risus tristique tristique non et quam. Nulla scelerisque nulla id dictum accumsan. Donec lectus lectus, vehicula id finibus eget, tincidunt vel justo. Suspendisse non suscipit arcu. Ut eleifend elementum orci, nec egestas ipsum lobortis eget. Vivamus feugiat magna ac enim mollis porttitor. Vivamus ac blandit erat. Morbi augue nunc, sagittis ut diam nec, tincidunt faucibus tortor. Integer tincidunt sollicitudin ultricies.
                    </p>
                </div>

                <div className="col-1-of-2">

                        <img src={davidabt_2} alt="David Photo" className="picture" />
                </div>

             </div>

    	</div>
    );
  }
}

export default About;
