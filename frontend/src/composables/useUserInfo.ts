import { getUserInfo } from '@/api/userInfo';
import { UserInfo } from '@/model/userInfo';
import { onMounted, ref } from 'vue';

export function UseUserInfo() {
    const userInfo = ref<UserInfo>();

    const getTheUserInfos = async () => {
        try {
            userInfo.value = await getUserInfo();
        } catch (error) {
          console.log(error); // FIXME: Errorhandling
        }
      };
    
    onMounted(getTheUserInfos);
    
    return {
        userInfo,
        getTheUserInfos,
    };
}