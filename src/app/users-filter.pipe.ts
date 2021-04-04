import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(users: any, input: any): any {
    if (input) {
      return users.filter(user => {
        return user.Name.toLowerCase().includes(input.toLowerCase());
      });
    } else {
      return users;
    }
  }


}
