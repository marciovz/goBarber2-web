import React, { useState } from 'react';
import {FiPower, FiClock} from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth()

  return (
    <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt='GoBarber' />

        <Profile>

          <img
            src={user.avatar_url}
           alt={user.name} />
          <div>
            <span>Bem vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>

    </Header>

    <Content>
      <Schedule>
        <h1>Horários agendados</h1>
        <p>
          <span>Hoje</span>
          <span>Dia 06</span>
          <span>Segunda-feira</span>
        </p>

        <NextAppointment>
          <strong>Atendimanto a seguir</strong>
          <div>
            <img
            src="https://avatars2.githubusercontent.com/u/12899169?s=460&u=b1212e21ab90d27d67670d6678a37409cab858f2&v=4"
            alt="Marciovz"
            />

            <strong>Diego Fernandes</strong>
            <span>
              <FiClock />
              08:00
            </span>
          </div>
        </NextAppointment>

        <Section>
          <strong>Manhã</strong>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img
              src="https://avatars2.githubusercontent.com/u/12899169?s=460&u=b1212e21ab90d27d67670d6678a37409cab858f2&v=4"
              alt="Marciovz"
              />
            </div>
          </Appointment>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img
              src="https://avatars2.githubusercontent.com/u/12899169?s=460&u=b1212e21ab90d27d67670d6678a37409cab858f2&v=4"
              alt="Marciovz"
              />
            </div>
          </Appointment>
        </Section>

        <Section>
          <strong>Tarde</strong>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img
              src="https://avatars2.githubusercontent.com/u/12899169?s=460&u=b1212e21ab90d27d67670d6678a37409cab858f2&v=4"
              alt="Marciovz"
              />
            </div>
          </Appointment>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img
              src="https://avatars2.githubusercontent.com/u/12899169?s=460&u=b1212e21ab90d27d67670d6678a37409cab858f2&v=4"
              alt="Marciovz"
              />
            </div>
          </Appointment>
        </Section>


      </Schedule>
      <Calendar></Calendar>
    </Content>
  </Container>
  );
};

export default Dashboard;
