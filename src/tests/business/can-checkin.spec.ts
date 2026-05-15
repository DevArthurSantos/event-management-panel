import { canCheckin } from '@/src/infra/helpers/business/can-checkin';
import { Event } from '@/src/infra/schemas/event/event.schema';

import { Participant } from '@/src/infra/schemas/participant/participant.schema';

import {
  describe,
  expect,
  it,
} from 'vitest';

describe('canCheckin', () => {
  it('should deny checkin when event is closed', () => {
    const event: Event = {
      id: '1',
      name: 'Evento',
      date: '2025-05-15',
      location: 'São Paulo',
      description: 'Descrição',
      status: 'closed',
      expected_count: 100,
      checkin_count: 0,
      error_count: 0,
      entry_rate: 0,
    };

    const participant: Participant = {
      id: '1',
      name: 'João',
      type: 'normal',
      event_id: '1',
      status: 'outside',
      checkin_count: 0,
    };

    const result = canCheckin(
      event,
      participant,
    );

    expect(result.allowed).toBe(
      false,
    );
  });

  it('should deny second normal checkin', () => {
    const event: Event = {
      id: '1',
      name: 'Evento',
      date: '2025-05-15',
      location: 'São Paulo',
      description: 'Descrição',
      status: 'active',
      expected_count: 100,
      checkin_count: 0,
      error_count: 0,
      entry_rate: 0,
    };

    const participant: Participant = {
      id: '1',
      name: 'Maria',
      type: 'normal',
      event_id: '1',
      status: 'inside',
      checkin_count: 1,
    };

    const result = canCheckin(
      event,
      participant,
    );

    expect(result.allowed).toBe(
      false,
    );
  });

  it('should allow vip checkin', () => {
    const event: Event = {
      id: '1',
      name: 'Evento',
      date: '2025-05-15',
      location: 'São Paulo',
      description: 'Descrição',
      status: 'active',
      expected_count: 100,
      checkin_count: 0,
      error_count: 0,
      entry_rate: 0,
    };

    const participant: Participant = {
      id: '1',
      name: 'Carlos',
      type: 'vip',
      event_id: '1',
      status: 'inside',
      checkin_count: 999,
    };

    const result = canCheckin(
      event,
      participant,
    );

    expect(result.allowed).toBe(
      true,
    );
  });
});