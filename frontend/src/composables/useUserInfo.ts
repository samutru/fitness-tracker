import { getUserInfo, updateUser } from '@/api/userInfo';
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

    const openProfile = ref<boolean>(false)
    const age = ref<number>(0);
    const height = ref<number>(0);
    const weight = ref<number>(0);

    const openCloseModal= (isOpen: boolean) => {
      openProfile.value = isOpen;
    }

    const updateUserInfos = async ()=> {
      let userUpdate: UserInfo = {
        height: height.value,
        weight: weight.value,
        age: age.value,
        bmi: parseFloat((weight.value / ((height.value/100) * (height.value/100))).toFixed(1))
      }
      await updateUser(userUpdate)
      await getTheUserInfos()
      openCloseModal(false)

    }
    
    
  onMounted(() => {
    getTheUserInfos().then(() => {
      if(userInfo.value?.age && userInfo.value.height && userInfo.value.weight) {
        age.value = userInfo.value?.age;
        height.value = userInfo.value?.height;
        weight.value = userInfo.value?.weight;
      }
    });
  });
    
    return {
        userInfo,
        openProfile,
        age,
        height,
        weight,
        openCloseModal,
        updateUserInfos,
        getTheUserInfos
    };
}