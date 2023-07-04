import { createNewUser } from '@/api/signup';
import { ref } from 'vue';
import { signupUser } from '@/model/signupUser';
import { useRouter } from 'vue-router';
import { getToken } from '@/api/auth';

export function UseSignup() {

    const username = ref("");
    const password = ref("");
    const height = ref();
    const weight = ref();
    const age = ref();
    const router = useRouter();
    
    const signupUser = async () => {

        let user: signupUser= {
            loginName: username.value,
            passwordHash: password.value,
            height: height.value,
            weight: weight.value,
            age: age.value,
            //calculate bmi as weight(kg) / (height(m))^2
            bmi: parseFloat((weight.value / ((height.value/100) * (height.value/100))).toFixed(1))
        };
        try {
            await createNewUser(user)

            // login the user
            const token = await getToken(username.value, password.value);
            router.push('/tabs/profile');
        } catch (error) {
            console.log(error);
        }
    }
    return {
        username,
        password,
        height,
        weight,
        age,
        signupUser
    };
}