import { IReturn } from "../../helpers/ApiReturnType";
import { URL } from "../../helpers/url";

export class LoginController {

  async login(body: {email: string, password: string}): Promise<IReturn> {
    const request = await fetch(`${URL}/auth/login`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await request.json() as IReturn;
    return json
  }

}
