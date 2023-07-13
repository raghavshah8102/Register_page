<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="container">
      <header>Registration Form</header>
      <form id="registration-form" action="register.php" class="form" method="post" enctype="multipart/form-data">
        <div class="input-box">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter full name"/>
          <span class="error" id="name-error"></span>
        </div>

        <div class="input-box">
          <label for="email">Email Address</label>
          <input type="text" id="email" name="email" placeholder="Enter email address"/>
          <span class="error" id="email-error"></span>
        </div>

        <div class="column">
          <div class="input-box">
            <label for="mobile_no">Phone Number</label>
            <input type="text" id="mobile_no" name="mobile_no" placeholder="Enter phone number"/>
            <span class="error" id="mobile-error"></span>
          </div>

          <div class="input-box">
            <label for="dob">Birth Date</label>
            <input type="date" id="dob" name="dob" placeholder="Enter birth date"/>
            <span class="error" id="dob-error"></span>
          </div>
        </div>
        <div class="input-box">
            <label for="city">City</label>
            <input type="text" id="city" name="city" placeholder="Enter your city"/>
            <span class="error" id="city-error"></span>
          </div>
        </div>
        <!-- <button id='submit' name="submit">Submit</button> -->
        <button type="submit" name="submit"class="submit">Submit</button>
      </form>
    </section>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    

</body>
</html>