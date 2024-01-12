'use client'

function OneSignalInit(oneSignalId: string) {
  import('onesignal-cordova-plugin')
    .then(x => x.default)
    .then(OneSignal => {
      OneSignal.initialize(oneSignalId)

      const myClickListener = async (event: any) => {
        const notificationData = JSON.stringify(event)
        console.log('notificationData: ', notificationData)
      }

      OneSignal.Notifications.addEventListener('click', myClickListener)

      OneSignal.Notifications.requestPermission(true).then((accepted) => {
        console.log('Accepted permission: ', accepted)
      })
    }).catch(e => {
      console.error(e)
    })
}


const PushNotification = ({ oneSignalId }: { oneSignalId: string }) => {
  if (typeof window !== 'undefined') {
    OneSignalInit(oneSignalId)
  }

  return <></>
}

export default PushNotification
