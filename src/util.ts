import {getCurrentInstance, ComponentInternalInstance} from 'vue'

export function useGlobalConfig() {
    const instance: ComponentInternalInstance | null = getCurrentInstance()
    if (!instance) {
        return console.log('useGlobalConfig 必须得在 setup 里面整');
    }
    return instance.appContext.config.globalProperties.$AILEMENTE || {}
}
