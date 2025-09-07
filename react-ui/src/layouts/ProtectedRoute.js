import React, { useState, useEffect, useDisclosure } from "react";
import { Route } from "react-router-dom";
import { useAuth } from "auth-context/auth.context";
import { useHistory } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  ChakraProvider,
  Button,
  Flex,
} from '@chakra-ui/react'
// import SweetAlert from "react-bootstrap-sweetalert"; // REMOVED: Package uninstalled; use Chakra UI AlertDialog instead.
import axios from "api/index";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [userData, setUserData] = useState({});
  useEffect(() => {
    if (user && user.token) {
      axios
        .get("/users/user", {
          headers: { Authorization: `${user.token}` },
        })
        .then((response) => {
          setUserData(response.data);
          console.log(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  if (!user || !user.token || user.token === "") {
    return (
      <ChakraProvider>
      <Flex
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        mx="auto"
      >
      <AlertDialog
        isOpen={true}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Вам необходимо войти в аккаунт
            </AlertDialogHeader>
            
            <AlertDialogBody>
              Для доступа к этой странице необходимо авторизоваться
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => history.push("/auth/signin")}
              >
                Войти
              </Button>
              
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Flex>
    </ChakraProvider>
    );
  }
   if ( userData && userData.role === "mentor_not_approved") {
     return (
      <ChakraProvider>
      <Flex
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        mx="auto"
      >
      <AlertDialog
        isOpen={true}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Теперь нужно заполнить анкету
            </AlertDialogHeader>
            
            <AlertDialogBody>
            Вам необходимо заполнить анкету с информацией о вашем образовании для того, чтобы стать ментором. 
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => history.push("/auth/signup-mentor")}
              >
                Заполнить анкету
              </Button>

            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Flex>
    </ChakraProvider>
    );
   }

  if (userData && userData.role === "mentor_waiting_for_approval") {
    return (
      <ChakraProvider>
      <Flex
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        mx="auto"
      >
      <AlertDialog
        isOpen={true}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Ваша анкета находится на рассмотрении
            </AlertDialogHeader>
          
            <AlertDialogBody>
              Сейчас с вами свяжется менеджер для проверки данных. Ожидайте сообщения!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => history.push("/")}
              >
                Хорошо, я понял
              </Button>

            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Flex>
    </ChakraProvider>
    );
  }
  return <Route {...rest} />;
};
