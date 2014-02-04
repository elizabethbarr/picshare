userData = [
  {
    avatarusername: 'Bertman45',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
  {
    avatarusername: 'Jeremyson',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
  {
    avatarusername: 'Elizbarr',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
    {
    avatarusername: 'LingBoard',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
    {
    avatarusername: 'EnFuego',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  }
]

function User (name,propic,image) {
  if (name) {this.avatarusername = name}
  if (propic) {this.profilepic = propic}
  if (image) {
    this.images = [{
      url: image
    }]
  }
}

User.prototype = {
  avatarusername: '' || 'Jimbo',
  profilepic: '' || 'No Avatar',
  images: [
            {
              url: ''
            }
          ] 
}


$('.submit').click(function(){
  console.log('We have a new user. YAY!!!');
    var name      = $('#usern').val();
    var propic    = $('#prop').val();
    var galimg    = $('#gali').val();

    var userperson = new User(name,propic,galimg);
  
    userData.push(userperson);
  
    var useravatartemplate = _.template($('.avatar-template').text());
    var usergallerytemplate  = _.template($('.gallery-template').text());
  
    var lastFiveUsers = _.last(userData, 5);
  
    $('.avatar').remove();

    _.each(lastFiveUsers, function(avatar) {
    $('.centeravatarcontainer').append(useravatartemplate(avatar));
    });
    
    $('.galleryimgbox').remove();

    _.each(userData, function(avatar) {
      _.each(avatar.images, function(image, index){
      $('.gallerytainer').append(usergallerytemplate(image));
      });
    });

    $('.avatar').mouseover(function() {
      $(this).children('.caption').show()
    });

    $('.avatar').mouseout(function() {
      $(this).children('.caption').hide()
    });

    $('#usern').val("1. Enter your username ...");
    $('#prop').val("2. Choose a profile pic ...");
    $('#gali').val("3. And upload your photos ...");


});

var useravatartemplate = _.template($('.avatar-template').text());
var usergallerytemplate = _.template($('.gallery-template').text());

 _.each(userData, function(user,index){
  _.each(user.images, function(image, index){
    $('.gallerytainer').append(usergallerytemplate(image));
  });
  $('.centeravatarcontainer').append(useravatartemplate(user));
 });


 
$('.avatar').mouseover(function() {
  $(this).children('.caption').show()
});

$('.avatar').mouseout(function() {
  $(this).children('.caption').hide()
});

