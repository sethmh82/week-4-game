    var myHealth = 100,
    enemy1Health = 100,
    enemiesKilled = 0,
    attackPower1 = 1,
    attacking = 0,
    enemyLoaded = 0,
    enemy1dead = 0,
    enemy2dead = 0,
    enemy3dead = 0;

    function isGameOver(){
      if (enemiesKilled === 3) {
      $("#you-won").html("<h1>YOU WIN</h1><br><h2>You defeated all enemies</h2>");
      document.getElementById("you-won").style.background = "#f4af0a";
      document.getElementById("you-won").style.padding = "30px";
      document.getElementById("enemy-image").style.display = "none";
      } 
    }

    function iAmAttacking() {
      isGameOver();

          if (enemyLoaded === 0) {
          } else {
                var myAttack = attackPower1;
                enemy1Health = (enemy1Health - myAttack);
                document.getElementById("healthBar").style.width = (enemy1Health + "%");
                attackPower1++;
                $("#my-attack").html(attackPower1);  
                         
                      if (enemy1Health <= 0) {
                            document.getElementById("healthBar").style.width = "0%";
                            $("#enemy-health").html("0"); 
                            $("#enemy-image").html("<img class='enemypic' src='assets/images/explode.gif'>"); 
                            enemiesKilled++;
                            isGameOver();
                            $("#kills").html(enemiesKilled);
                            enemyLoaded = 0;
                            enemy1dead = 1;
                      } else {
                            $("#enemy-health").html(enemy1Health);
                            enemyIsAttacking();
                      }      
          }
                  
    }


    function enemyIsAttacking() {
        if (attacking === 1) {
        var enemyAttack = Math.floor(Math.random()*19);
        }
        if (attacking === 2) {
        var enemyAttack = Math.floor(Math.random()*27);
        }
        if (attacking === 3) {
        var enemyAttack = Math.floor(Math.random()*12);
        }

          myHealth = (myHealth - enemyAttack);
              if (myHealth <= 0) {
              document.getElementById("myHealthBar").style.width = ("0%");
              $("#my-health").html("0");
              $("#you-won").html("<h1>YOU LOST</h1><br><h2>You were defeated by the enemy</h2>");
              document.getElementById("you-won").style.background = "red";
              document.getElementById("you-won").style.padding = "30px";
              document.getElementById("enemy-image").style.display = "none";
              } else {
              document.getElementById("myHealthBar").style.width = (myHealth + "%");
              $("#my-health").html(myHealth);
              }    
    	
    }

// ATTACK BUTTON
        $("#power1").on("click", function() {
        $("#power1-chosen").html(headsCount);
        iAmAttacking();

    });

// CHOOSING AN ENEMY

        //PROBE DROID
        $("#enemy1").on("click", function() {
          attacking = 1;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/probe.gif'>");
        $("#enemy-name").html("<b>Probe</b>");
       	$("#enemy-health").html(enemy1Health);
        document.getElementById("healthBar").style.width = "100%";
    });
        $("#enemy2").on("click", function() {
          attacking = 2;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/stormtrooper.gif'>");
        $("#enemy-name").html("<b>Stormtrooper</b>");
       	$("#enemy-health").html(enemy2Health);
        document.getElementById("healthBar").style.width = "100%";
    });
        //AT-ST WALKER
        $("#enemy3").on("click", function() {
          attacking = 3;
          enemyLoaded = 1;
          enemy1Health = 100;
        $("#enemy-image").html("<img class='enemypic' src='assets/images/at-st.gif'>");
        $("#enemy-name").html("<b>AT-ST Walker</b>");
       	$("#enemy-health").html(enemy3Health);
        document.getElementById("healthBar").style.width = "100%";
    });

     
