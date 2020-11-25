
        function check() {

            let Nationality = document.getElementById("Nationality").value;
            let Height = document.getElementById("Height").value;
            Height= parseFloat(Height);

            let Age = document.getElementById("Age").value;
            Age= parseInt(Age);
            let Education = document.getElementById("Education").value;
            // let EducationMaster = document.getElementById("EducationMaster").value;
            

            if ((Nationality === "Pakistan") && (Height >= 5) && ((Age >= 18) && (Age <= 25))  ){
                document.getElementById("result").innerHTML= "<h1> Congrutulation</h1>"
                // alert("Congo")
                // if(EducationMaster <= 28  ){
                //     document.getElementById("result").innerHTML= "<h1> Congrutulation</h1>"

                // }
                
            }
            else {
                document.getElementById("result").innerHTML= "<h1> You  are not eligable </h1>"
                // alert("NOT eligable ")
                
            }
          

        }