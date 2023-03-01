const stringRegExp = /^[a-zA-Z0-9 ]+$/;
const numberRegExp = /^([1-5])$/;

const validation = (form) => {
    let errors = {};

  if (!form.name) {
    errors.name = '*Name is required';
  } else if (!stringRegExp.test(form.name)) {
    errors.name = '*Name is invalid';
  }

  if(!form.released) {
    errors.released = '*Please add the released date'
  }

  if(!form.rating) {
    errors.rating = '*Please rate the videogame'
  }else if(!numberRegExp.test(form.rating)){
    errors.rating = 'Rating invalid';
  }


  if(!form.description){
    errors.description = '*The description must contain at least 10 characters'
  }

  if(!form.platforms) {
    errors.rating = '*Please choose at least one platform'
  }

  if(!form.genres) {
    errors.rating = '*Please choose at least one genre for this videogame'
  }

  return errors
}

export default validation;