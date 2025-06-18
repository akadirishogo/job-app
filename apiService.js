const BASE_URL = 'https://careerbox-dev-api-89uwx.ondigitalocean.app'


export const signUpUser = async (fullName, email, password) => {
      try {
          const response = await fetch(`${BASE_URL}/auth/talent-signup`,{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify(
              {
                  "name": fullName,
                  "email": email,
                  "password": password,
              }
              ),
          })
  
  
          const result = await response.json();
          if (result.status === false) {
              return new Error(result?.message || 'Something went wrong');
          }
          return result
      } catch(error) {
          return error
      }
    }


    export const verifyCode = async (email, code) => {
      try {
          const response = await fetch(`${BASE_URL}/auth/verify-email`,{
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify(
              {
                  "email": email,
                  "token": code,
              }
              ),
          })
  
  
          const result = await response.json();
          if (result.status === false) {
              return new Error(result?.message || 'Something went wrong');
          }
          return result
      } catch(error) {
          return error
      }
    }


    export const login = async (email, password, type='TALENT') => {
      try {
          const response = await fetch(`${BASE_URL}/auth/signin`,{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify(
              {
                  "email": email,
                  "password": password,
                  "type": type
              }
              ),
          })
  
  
          const result = await response.json();
          if (result.status === false) {
              return new Error(result?.message || 'Something went wrong');
          }
          return result
      } catch(error) {
          return error
      }
    }



     export const forgotPassword = async (email) => {
      try {
          const response = await fetch(`${BASE_URL}/auth/forgot-password`,{
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify(
              {
                  "email": email,
              }
              ),
          })
  
  
          const result = await response.json();
          if (result.status === false) {
              return new Error(result?.message || 'Something went wrong');
          }
          return result
      } catch(error) {
          return error
      }
    }


    export const resetPassword = async (newPassword, token) => {
      try {
          const response = await fetch(`${BASE_URL}/auth/reset-password`,{
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
                  'x-access-token': token,
                },
              body: JSON.stringify(
              {
                  "password": newPassword,
              }
              ),
          })
  
  
          const result = await response.json();
          if (result.status === false) {
              return new Error(result?.message || 'Something went wrong');
          }
          return result
      } catch(error) {
          return error
      }
    }


    export const verifyToken = async (email, code) => {
      try {
          const response = await fetch(`${BASE_URL}/auth/verify-token`,{
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
                },
              body: JSON.stringify(
              {
                  "email": email,
                  "token": code,
              }
              ),
          })
  
  
          const result = await response.json();
          if (result.status === false) {
              return new Error(result?.message || 'Something went wrong');
          }
          return result
      } catch(error) {
          return error
      }
    }



    
    
    
    
    
    