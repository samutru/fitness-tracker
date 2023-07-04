import { createNewUser } from '@/api/signup';
import { ref } from 'vue';
import { signupUser } from '@/model/signupUser';

export function UseSignup() {

    const username = ref("");
    const password = ref("");
    const height = ref();
    const weight = ref();
    const age = ref();
    
    const signupUser = async () => {

        let user: signupUser= {
            loginName: username.value,
            passwordHash: password.value,
            height: height.value,
            weight: weight.value,
            age: age.value,
            //calculate bmi as weight(kg) / (height(m))^2
            bmi: weight.value / ((height.value/100) * (height.value/100))
        };

        createNewUser(user)
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