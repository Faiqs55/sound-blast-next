class AuthService {
  user;
  constructor() {}

  async userSignup(userData) {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      this.user = await response.json();
      return this.user;
    } catch (error) {
      return error;
    }
  }

  async userLogin(userData){
    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)
        });
        this.user = await response.json();
        return this.user;
    } catch (error) {
        return error;
    }
  }

  async getUser(){
    try {
      const response = await fetch("/api/auth/get-user", {
        method: 'GET',
        headers: {"authorization": localStorage.getItem('token')}
      });      
      
      this.user = await response.json();
      
      return this.user;
    } catch (error) {
      return error
    }
  }
}

const userAuth = new AuthService();
export default userAuth;
