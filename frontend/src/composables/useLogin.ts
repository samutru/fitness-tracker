import { getToken } from '@/api/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useLogin() {
  const username = ref('');
  const password = ref('');
  const router = useRouter();

  const login = async () => {
    try {
      const token = await getToken(username.value, password.value);
      if (token.loginName && token.expiresAt && token.roles) {
        router.push('/tabs/profile');        
      } else {
        alert("Invalid username or password!")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    username,
    password,
    login,
  };
}
