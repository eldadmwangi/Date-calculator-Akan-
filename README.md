#{Introduction}
This is a program that gives an Akan name output based on the name and gender the user inputs.
the calender date selector starts with MM/DD/YYYY.
The calendar automatically doesnt allow you to enter an invalid date.

##{Usage}
once you select the required details on the fields, click the submit button.

##{Purpose}
The program is able to calculate the specific date you were born and based on that, tell you what your akan name is based on the day of the week.

##{Technology}
The program makes use of HTML for user inputs, Bootstrap styling and Javascript for functionality.

##{Licence}
Copyright (c) [2020] [Eldad Mwangi]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>Date Calculator</title>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/index.css">
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
   <script src="https://code.jquery.com/jquery-3.5.1.js"
    integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
    crossorigin="anonymous"></script>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
   <script src="js/index.js"></script>
</head>
</head>
<body>
    <br>
    <div class="container-fluid">
        <div class="col-md-6">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                
              </ol>
            
              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="images/Untitled design (8).png">
                  <div class="item">
                    <div class="carousel-caption">
                    </div>
                  </div>
                </div>
            
                <div class="item">
                  <img src="images/Untitled design (9).png">
                  <div class="carousel-caption">
                  </div>
                </div>
            
                <div class="item">
                  <img src="images/Untitled design (10).png">
                  <div class="carousel-caption">
                  </div>
                </div>
              </div>

            
            
              <!-- Left and right controls -->
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div class="container-fluid">
            <div class="col-md-6">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <!-- Indicators -->
                  <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    
                  </ol>
                
                  <!-- Wrapper for slides -->
                  <div class="carousel-inner">
                    <div class="item active">
                      <img src="images/Untitled design (8).png">
                      <div class="item">
                        <div class="carousel-caption">
                        </div>
                      </div>
                    </div>
                
                    <div class="item">
                      <img src="images/Untitled design (9).png">
                      <div class="carousel-caption">
                      </div>
                    </div>
                
                    <div class="item">
                      <img src="images/Untitled design (10).png">
                      <div class="carousel-caption">
                      </div>
                    </div>
                  </div>
    
                
                
                  <!-- Left and right controls -->
                  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>


    <br>
    <div class="container-fluid card-body bg-dark col-md-6 form-control">
        <div class="row">
            <div class="col-md-12">
                <label for="birth" class="text-white">Birthday</label>
                <input type="date" id="birth" class="form-control">
            </div>
            <div class="col-md-12">
                <label for="gender" class="text-white">Gender</label>
                <select name="Gender" id="gender" class="form-control">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <div class="col-md-12">
                <h5 id="result" class="text-danger"></h5>
            </div>
            <div class="col-md-6">
                <button class="btn btn-danger" id="btn">submit</button>
            </div>
        </div>
    </div>
</body>
<script src="js/index.js"></script>
</html>
