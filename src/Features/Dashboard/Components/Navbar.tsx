import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FiMenu, FiTrash2 } from 'react-icons/fi'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  useToast
} from "@chakra-ui/react"
import {useLocation, NavLink} from 'react-router-dom'
import { FiHome, FiActivity, FiClock, FiSettings, FiUser } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { URL } from '../../../helpers/url'
import useUser from '../../../hooks/useUser'
import { IReturn } from '../../../helpers/ApiReturnType'
import { INoti } from '../../../helpers/NotificationType'
import { queryclient } from '../../../index'

// get notification

const notiFunc = async(id: string) => {
  const request = await fetch(`${URL}/notifications/user/${id}`);

  if (!request.ok) {
    throw new Error('An error occured')
  }else {
    return await request.json() as IReturn;
  }
}

export default function Navbar() {
  const btnRef = React.useRef();
  const location = useLocation();
  const toast = useToast();
  const { user } = useUser();
  const [notifications, setNot] = React.useState([] as Array<INoti>);
  const [isOpen, setIsopen] = React.useState(false);
  const [noti, setNoti] = React.useState(false);
  const query = useQuery(['notifications', user.id], () => notiFunc(user.id), {
    onSuccess: (data: IReturn) => {
      const noties = data.data as Array<INoti>;
      setNot(noties);
    }
  } )

  const onClose = () => {
    setIsopen(false);
  }

  const closeNoti = () => {
    setNoti(false)
  }

  const del = async (id: number) => {
    const request = await fetch(`${URL}/notifications/${id}`,{
      method: 'delete'
    })
    const json = await request.json() as IReturn;
    console.log(json)

    if (json.statusCode === 200) {
      toast({
        title: 'Success',
        description: 'Notification deleted',
        status: 'success',
        isClosable: true
      })
      queryclient.invalidateQueries();
    }else {
      toast({
        title: 'Error',
        description: 'An error occured while trying to delete the notification',
        status: 'error',
        isClosable: true
      })
    }
  }
  return (
    <div className="w-full h-24 border-b-2 border-gray-200 bg-white flex items-center xl:px-14 lg:px-14 md:px-6 sm:px-6 justify-between">
      <div className="xl:hidden lg:hidden sm:block md:block" >
        <FiMenu size={25} onClick={() => setIsopen(true)} />
      </div>
      <span className="xl:block lg:block md:hidden sm:hidden font-bold text-2xl" > Dashboard </span>
      <div className="xl:hidden lg:hidden md:flex sm:flex flex-1 justify-center">
        <img src="/assets/logo-black.png" className="w-2/5" alt="logo" />
      </div>
      <div className="flex">
        <div className="rounded-full bg-gray-100 p-3">
          <FaBell color="gold" size={20} onClick={()=> setNoti(true)} />
        </div>
        {notifications.length > 0 &&
        <div className="bg-red-400 w-10 h-10 flex justify-center items-center text-white rounded-full ml-2">
          {notifications.length}
        </div>}
      </div>

      {/* drawer */}
      {/* side bar drawer */}

      <Drawer
        isOpen={isOpen}
        placement="left"
        blockScrollOnMount={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <div className="w-80 h-full bg-gray-100 z-10 pt-10 pl-0 xl:flex lg:flex sm:flex md:flex flex-col">
        <img src="/assets/logo-black.png" alt="" className="w-4/5 ml-10" />

        <div className="flex-1 mt-24">

          <h1 className="text-xl text-gray-700 font-bold ml-10">MAIN</h1>

          <NavLink to="/dashboard" className={location.pathname === '/dashboard' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiHome className="" size={20} />
            <p className="ml-3 mt-1 ">Home</p>
          </NavLink>

          <NavLink to="/dashboard/application" className={location.pathname === '/dashboard/application' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiActivity size={20} />
            <p className="ml-3 mt-1">Loan Application</p>
          </NavLink>

          <NavLink to="/dashboard/history" className={location.pathname === '/dashboard/history' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiClock size={20} />
            <p className="ml-3 mt-1">History</p>
          </NavLink>

          <h1 className="text-xl mt-10 text-gray-700 font-bold ml-10">ACCOUNT MANAGEMENT</h1>

          <NavLink to="/dashboard/settings" className={location.pathname === '/dashboard/settings' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiSettings size={20} />
            <p className="ml-3 mt-1">Settings</p>
          </NavLink>

          <NavLink to="/dashboard/profile" className={location.pathname === '/dashboard/profile' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiUser size={20} />
            <p className="ml-3 mt-1">Profile</p>
          </NavLink>

        </div>
      </div>

        </DrawerContent>
      </Drawer>

      {/* notifications drawer */}

      <Drawer
        isOpen={noti}
        placement="right"
        onClose={closeNoti}
        blockScrollOnMount={false}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody className="w-full h-full">
          <div className="w-full h-full z-10 pt-10 pl-0 xl:flex lg:flex sm:flex md:flex flex-col">


              <div className="flex-1 mt-24">

                <h1 className="text-2xl text-customGreen font-bold ">NOTIFICATION</h1>

                {
                  notifications.length < 1 ?
                  <p className="mt-10 text-center">You have no new notification</p>
                  :
                  <div className="w-full flex flex-col">
                    {
                      notifications.map((item, index) => (
                        <div className="w-full px-5 my-6">
                          <div className="flex justify-between items-center">
                            <div key={index} className="mb-6 flex-1 mr-5">{item.message}</div>
                            <div className="justify-e">
                              <FiTrash2 color="red" size={20} onClick={() => del(item.id)} />
                            </div>
                          </div>
                          <Divider />
                        </div>
                      ))
                    }
                  </div>
                }

                </div>

            </div>
          </DrawerBody>


        </DrawerContent>
      </Drawer>


    </div>
  )
}
