export const db = {
  "events": [
    {
      "id": "EVT-001",
      "name": "Tech Summit 2025",
      "date": "2025-05-15T00:00:00.000Z",
      "location": "Centro de Convenções, São Paulo – SP",
      "status": "active",
      "description": "O maior evento de tecnologia do Brasil reúne líderes do setor para debater IA, cloud e o futuro do desenvolvimento de software.",
      "expected_count": 34,
      "checkin_count": 25,
      "error_count": 5,
      "entry_rate": 104.17
    },
    {
      "id": "EVT-002",
      "name": "Design Week Rio",
      "date": "2025-04-20T10:00:00-03:00",
      "location": "Museu do Amanhã, Rio de Janeiro – RJ",
      "status": "closed",
      "description": "Semana dedicada ao design contemporâneo com workshops, palestras e exposições de designers nacionais e internacionais.",
      "expected_count": 8,
      "checkin_count": 6,
      "error_count": 2,
      "entry_rate": 75
    },
    {
      "id": "EVT-003",
      "name": "Startup Pitch Night",
      "date": "2025-05-28T19:00:00-03:00",
      "location": "Impact Hub, Belo Horizonte – MG",
      "status": "active",
      "description": "Startups em estágio inicial apresentam suas soluções para uma banca de investidores e especialistas do ecossistema de inovação.",
      "expected_count": 10,
      "checkin_count": 11,
      "error_count": 1,
      "entry_rate": 110
    },
    {
      "id": "EVT-004",
      "name": "Festival de Música Indie",
      "date": "2025-03-10T14:00:00-03:00",
      "location": "Parque Villa-Lobos, São Paulo – SP",
      "status": "cancelled",
      "description": "Festival com bandas independentes brasileiras e internacionais. Evento cancelado por condições climáticas adversas.",
      "expected_count": 15,
      "checkin_count": 2,
      "error_count": 0,
      "entry_rate": 13.33
    },
    {
      "id": "EVT-005",
      "name": "DevConf Brasil",
      "date": "2025-06-10T00:00:00.000Z",
      "location": "Anhembi, São Paulo – SP",
      "status": "active",
      "description": "Conferência para desenvolvedores com trilhas sobre front-end, back-end, DevOps e segurança. Mais de 80 palestrantes confirmados.",
      "expected_count": 50,
      "checkin_count": 51,
      "error_count": 25,
      "entry_rate": 102
    }
  ],
  "participants": [
    {
      "id": "EVT-001-P001",
      "event_id": "EVT-001",
      "name": "Ana Pereira",
      "type": "vip",
      "status": "inside",
      "checkin_count": 10
    },
    {
      "id": "EVT-001-P002",
      "event_id": "EVT-001",
      "name": "Pedro Barros",
      "type": "vip",
      "status": "inside",
      "checkin_count": 4
    },
    {
      "id": "EVT-001-P003",
      "event_id": "EVT-001",
      "name": "Henrique Ribeiro",
      "type": "vip",
      "status": "inside",
      "checkin_count": 7
    },
    {
      "id": "EVT-001-P004",
      "event_id": "EVT-001",
      "name": "Pedro Freitas",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P005",
      "event_id": "EVT-001",
      "name": "Natalia Carvalho",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P006",
      "event_id": "EVT-001",
      "name": "Amanda Costa",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P007",
      "event_id": "EVT-001",
      "name": "Lucas Rocha",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P008",
      "event_id": "EVT-001",
      "name": "Fernanda Carvalho",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P009",
      "event_id": "EVT-001",
      "name": "Gabriel Cardoso",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P010",
      "event_id": "EVT-001",
      "name": "Camila Martins",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P011",
      "event_id": "EVT-001",
      "name": "Vinicius Araujo",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-001-P012",
      "event_id": "EVT-001",
      "name": "Fernanda Ferreira",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-002-P001",
      "event_id": "EVT-002",
      "name": "Amanda Barros",
      "type": "vip",
      "status": "outside",
      "checkin_count": 2
    },
    {
      "id": "EVT-002-P002",
      "event_id": "EVT-002",
      "name": "Lucas Ribeiro",
      "type": "vip",
      "status": "outside",
      "checkin_count": 2
    },
    {
      "id": "EVT-002-P003",
      "event_id": "EVT-002",
      "name": "Camila Rocha",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-002-P004",
      "event_id": "EVT-002",
      "name": "Ana Souza",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-002-P005",
      "event_id": "EVT-002",
      "name": "Beatriz Araujo",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-002-P006",
      "event_id": "EVT-002",
      "name": "Amanda Monteiro",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-002-P007",
      "event_id": "EVT-002",
      "name": "Rodrigo Ferreira",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-002-P008",
      "event_id": "EVT-002",
      "name": "Gabriel Nascimento",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-003-P001",
      "event_id": "EVT-003",
      "name": "Fernanda Ferreira",
      "type": "vip",
      "status": "inside",
      "checkin_count": 6
    },
    {
      "id": "EVT-003-P002",
      "event_id": "EVT-003",
      "name": "Vinicius Silva",
      "type": "vip",
      "status": "outside",
      "checkin_count": 2
    },
    {
      "id": "EVT-003-P003",
      "event_id": "EVT-003",
      "name": "Gabriel Araujo",
      "type": "vip",
      "status": "outside",
      "checkin_count": 4
    },
    {
      "id": "EVT-003-P004",
      "event_id": "EVT-003",
      "name": "Lucas Pereira",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-003-P005",
      "event_id": "EVT-003",
      "name": "Thiago Ferreira",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-003-P006",
      "event_id": "EVT-003",
      "name": "Fernanda Costa",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-003-P007",
      "event_id": "EVT-003",
      "name": "Lucas Freitas",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-003-P008",
      "event_id": "EVT-003",
      "name": "Henrique Freitas",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-003-P009",
      "event_id": "EVT-003",
      "name": "Felipe Araujo",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-003-P010",
      "event_id": "EVT-003",
      "name": "Fernanda Souza",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P001",
      "event_id": "EVT-004",
      "name": "Camila Souza",
      "type": "vip",
      "status": "inside",
      "checkin_count": 2
    },
    {
      "id": "EVT-004-P002",
      "event_id": "EVT-004",
      "name": "Ana Costa",
      "type": "vip",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P003",
      "event_id": "EVT-004",
      "name": "Rafael Santos",
      "type": "vip",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P004",
      "event_id": "EVT-004",
      "name": "Henrique Freitas",
      "type": "vip",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P005",
      "event_id": "EVT-004",
      "name": "Felipe Gomes",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P006",
      "event_id": "EVT-004",
      "name": "Lucas Costa",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P007",
      "event_id": "EVT-004",
      "name": "Mariana Ferreira",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P008",
      "event_id": "EVT-004",
      "name": "Thiago Oliveira",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P009",
      "event_id": "EVT-004",
      "name": "Carlos Souza",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P010",
      "event_id": "EVT-004",
      "name": "Rafael Pereira",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P011",
      "event_id": "EVT-004",
      "name": "Rafael Carvalho",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P012",
      "event_id": "EVT-004",
      "name": "Mariana Cardoso",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P013",
      "event_id": "EVT-004",
      "name": "Vinicius Silva",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P014",
      "event_id": "EVT-004",
      "name": "Mariana Monteiro",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-004-P015",
      "event_id": "EVT-004",
      "name": "Vinicius Araujo",
      "type": "normal",
      "status": "outside",
      "checkin_count": 0
    },
    {
      "id": "EVT-005-P001",
      "event_id": "EVT-005",
      "name": "Camila Pereira",
      "type": "vip",
      "status": "inside",
      "checkin_count": 26
    },
    {
      "id": "EVT-005-P002",
      "event_id": "EVT-005",
      "name": "Fernanda Freitas",
      "type": "vip",
      "status": "inside",
      "checkin_count": 4
    },
    {
      "id": "EVT-005-P003",
      "event_id": "EVT-005",
      "name": "Natalia Monteiro",
      "type": "vip",
      "status": "inside",
      "checkin_count": 6
    },
    {
      "id": "EVT-005-P004",
      "event_id": "EVT-005",
      "name": "Bruno Ferreira",
      "type": "vip",
      "status": "inside",
      "checkin_count": 3
    },
    {
      "id": "EVT-005-P005",
      "event_id": "EVT-005",
      "name": "Carlos Martins",
      "type": "vip",
      "status": "inside",
      "checkin_count": 5
    },
    {
      "id": "EVT-005-P006",
      "event_id": "EVT-005",
      "name": "Isabela Rocha",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P007",
      "event_id": "EVT-005",
      "name": "Larissa Alves",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P008",
      "event_id": "EVT-005",
      "name": "Felipe Ferreira",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P009",
      "event_id": "EVT-005",
      "name": "Eduardo Souza",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P010",
      "event_id": "EVT-005",
      "name": "Rodrigo Pereira",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P011",
      "event_id": "EVT-005",
      "name": "Vinicius Costa",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P012",
      "event_id": "EVT-005",
      "name": "Leticia Gomes",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P013",
      "event_id": "EVT-005",
      "name": "Felipe Freitas",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P014",
      "event_id": "EVT-005",
      "name": "Leticia Santos",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P015",
      "event_id": "EVT-005",
      "name": "Juliana Martins",
      "type": "normal",
      "status": "outside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P016",
      "event_id": "EVT-005",
      "name": "Eduardo Nascimento",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P017",
      "event_id": "EVT-005",
      "name": "Rafael Silva",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P018",
      "event_id": "EVT-005",
      "name": "Rafael Lima",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P019",
      "event_id": "EVT-005",
      "name": "Mariana Oliveira",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "id": "EVT-005-P020",
      "event_id": "EVT-005",
      "name": "Isabela Oliveira",
      "type": "normal",
      "status": "inside",
      "checkin_count": 1
    },
    {
      "name": "tete",
      "type": "normal",
      "id": "2N8JCZ9z834",
      "event_id": "EVT-001",
      "status": "outside",
      "checkin_count": 0
    }
  ],
  "checkins": [
    {
      "id": "EVT-001-CK001",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2025-05-15T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK002",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2025-05-15T13:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK003",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2025-05-15T15:34:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK004",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2025-05-15T16:51:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK005",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P002",
      "timestamp": "2025-05-15T13:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK006",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P002",
      "timestamp": "2025-05-15T14:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK007",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P003",
      "timestamp": "2025-05-15T14:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK008",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P003",
      "timestamp": "2025-05-15T15:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK009",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P003",
      "timestamp": "2025-05-15T17:34:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK010",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P003",
      "timestamp": "2025-05-15T18:51:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK011",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2025-05-15T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK012",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2025-05-15T14:00:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK013",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P005",
      "timestamp": "2025-05-15T13:11:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK014",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P006",
      "timestamp": "2025-05-15T14:22:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK015",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P006",
      "timestamp": "2025-05-15T17:30:00.000Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in"
    },
    {
      "id": "EVT-001-CK016",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P007",
      "timestamp": "2025-05-15T15:33:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK017",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P007",
      "timestamp": "2025-05-15T17:21:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK018",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P008",
      "timestamp": "2025-05-15T16:44:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-001-CK019",
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P009",
      "timestamp": "2025-05-15T17:55:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK001",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2025-04-20T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK002",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2025-04-20T13:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK003",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P002",
      "timestamp": "2025-04-20T13:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK004",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P002",
      "timestamp": "2025-04-20T14:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK005",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P003",
      "timestamp": "2025-04-20T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK006",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P003",
      "timestamp": "2025-04-20T14:00:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK007",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P004",
      "timestamp": "2025-04-20T13:11:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK008",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P004",
      "timestamp": "2025-04-20T15:07:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK009",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P005",
      "timestamp": "2025-04-20T14:22:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK010",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P005",
      "timestamp": "2025-04-20T16:14:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK011",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P005",
      "timestamp": "2025-04-20T17:30:00.000Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in"
    },
    {
      "id": "EVT-002-CK012",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P006",
      "timestamp": "2025-04-20T15:33:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK013",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P006",
      "timestamp": "2025-04-20T17:21:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-002-CK014",
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P007",
      "timestamp": "2025-04-21T00:52:00.000Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed"
    },
    {
      "id": "EVT-003-CK001",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P001",
      "timestamp": "2025-05-28T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK002",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P001",
      "timestamp": "2025-05-28T13:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK003",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P001",
      "timestamp": "2025-05-28T15:34:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK004",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P001",
      "timestamp": "2025-05-28T16:51:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK005",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P002",
      "timestamp": "2025-05-28T13:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK006",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P002",
      "timestamp": "2025-05-28T14:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK007",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P003",
      "timestamp": "2025-05-28T14:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK008",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P003",
      "timestamp": "2025-05-28T15:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK009",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P003",
      "timestamp": "2025-05-28T17:34:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK010",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P003",
      "timestamp": "2025-05-28T18:51:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK011",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P004",
      "timestamp": "2025-05-28T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK012",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P004",
      "timestamp": "2025-05-28T14:00:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK013",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P005",
      "timestamp": "2025-05-28T13:11:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK014",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P006",
      "timestamp": "2025-05-28T14:22:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK015",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P006",
      "timestamp": "2025-05-28T17:30:00.000Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in"
    },
    {
      "id": "EVT-003-CK016",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P007",
      "timestamp": "2025-05-28T15:33:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-003-CK017",
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P007",
      "timestamp": "2025-05-28T17:21:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK001",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2025-06-10T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK002",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2025-06-10T13:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK003",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2025-06-10T15:34:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK004",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2025-06-10T16:51:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK005",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P002",
      "timestamp": "2025-06-10T13:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK006",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P002",
      "timestamp": "2025-06-10T14:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK007",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P003",
      "timestamp": "2025-06-10T14:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK008",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P003",
      "timestamp": "2025-06-10T15:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK009",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P003",
      "timestamp": "2025-06-10T17:34:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK010",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P003",
      "timestamp": "2025-06-10T18:51:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK011",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P004",
      "timestamp": "2025-06-10T15:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK012",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P004",
      "timestamp": "2025-06-10T16:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK013",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P005",
      "timestamp": "2025-06-10T16:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK014",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P005",
      "timestamp": "2025-06-10T17:17:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK015",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P005",
      "timestamp": "2025-06-10T19:34:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK016",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P005",
      "timestamp": "2025-06-10T20:51:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK017",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P006",
      "timestamp": "2025-06-10T12:00:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK018",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P006",
      "timestamp": "2025-06-10T14:00:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK019",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P007",
      "timestamp": "2025-06-10T13:11:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK020",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P008",
      "timestamp": "2025-06-10T14:22:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK021",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P008",
      "timestamp": "2025-06-10T17:30:00.000Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in"
    },
    {
      "id": "EVT-005-CK022",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P009",
      "timestamp": "2025-06-10T15:33:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK023",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P009",
      "timestamp": "2025-06-10T17:21:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK024",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P010",
      "timestamp": "2025-06-10T16:44:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK025",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P011",
      "timestamp": "2025-06-10T17:55:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK026",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P012",
      "timestamp": "2025-06-10T18:06:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK027",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P012",
      "timestamp": "2025-06-10T20:42:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK028",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P013",
      "timestamp": "2025-06-10T19:17:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK029",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P014",
      "timestamp": "2025-06-10T20:28:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK030",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P015",
      "timestamp": "2025-06-10T21:39:00.000Z",
      "success": true,
      "action": "entry",
      "error_reason": null
    },
    {
      "id": "EVT-005-CK031",
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P015",
      "timestamp": "2025-06-10T23:03:00.000Z",
      "success": true,
      "action": "exit",
      "error_reason": null
    },
    {
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P001",
      "timestamp": "2026-05-15T04:34:58.095Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "9Ei3CWg4CXk"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T04:35:13.018Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "0B7Zupzdam8"
    },
    {
      "event_id": "EVT-004",
      "participant_id": "EVT-004-P001",
      "timestamp": "2026-05-15T04:35:52.601Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "q_akrdZ5le8"
    },
    {
      "event_id": "EVT-004",
      "participant_id": "EVT-004-P001",
      "timestamp": "2026-05-15T04:36:00.118Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "Pc6IrqG56_I"
    },
    {
      "event_id": "EVT-003",
      "participant_id": "EVT-003-P001",
      "timestamp": "2026-05-15T04:36:05.766Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "b90dXTIIQ3Y"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2026-05-15T04:44:11.845Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "EpPxxpCplkg"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2026-05-15T04:44:13.186Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "65dYbaVm2Aw"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2026-05-15T04:44:13.686Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "IQW1lLxZ4EY"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2026-05-15T04:44:14.168Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "LY-1B0y6mVg"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2026-05-15T04:44:14.577Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "qDSjGnjW0VM"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2026-05-15T04:44:43.214Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "BTQUAZnWEeo"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P002",
      "timestamp": "2026-05-15T04:44:45.321Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "5-Ja4h2ANUU"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P005",
      "timestamp": "2026-05-15T04:44:46.710Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "zq9c7FUuLes"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P006",
      "timestamp": "2026-05-15T04:44:47.315Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "5DVl7cd-wZI"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P006",
      "timestamp": "2026-05-15T04:44:48.306Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "LicA56VgskI"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P006",
      "timestamp": "2026-05-15T04:44:48.670Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "iIMZsvx9rdg"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P006",
      "timestamp": "2026-05-15T04:44:48.907Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "jo5hrjmIKJg"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P002",
      "timestamp": "2026-05-15T04:44:50.058Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "fz35HKWBrNU"
    },
    {
      "event_id": "EVT-002",
      "participant_id": "EVT-002-P001",
      "timestamp": "2026-05-15T04:44:50.675Z",
      "success": false,
      "action": "entry",
      "error_reason": "event_closed",
      "id": "FPEsDnbwhuY"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2026-05-15T04:44:56.679Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "PJF8mtDZ3Bw"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2026-05-15T04:44:58.095Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "a-1STjL_TrQ"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:45:01.316Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "1oDF733Syiw"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P005",
      "timestamp": "2026-05-15T04:45:04.046Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "mDnJpFN3YYw"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P006",
      "timestamp": "2026-05-15T04:45:04.949Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "oO2sNIjflIA"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:45:05.692Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "20nUV6rs3pw"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:45:06.075Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "PFZrz_1IeTk"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:45:06.302Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "0LPnv20EHgM"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:45:06.530Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "dy6LB7DfYwU"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:45:06.723Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "mU0AgC_xmw0"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:45:07.175Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "aWYcUKmlX5A"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P003",
      "timestamp": "2026-05-15T04:45:09.757Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "dvBH8QYvtm4"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P002",
      "timestamp": "2026-05-15T04:45:10.202Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "K2S7ndwkqTg"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2026-05-15T04:45:10.699Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "tTVsAEoZhn8"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P007",
      "timestamp": "2026-05-15T04:45:12.209Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "NoRut-OAPkY"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P008",
      "timestamp": "2026-05-15T04:45:12.645Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "LiXEum5TM5M"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P009",
      "timestamp": "2026-05-15T04:45:13.085Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "IJkKLwtTl_U"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P010",
      "timestamp": "2026-05-15T04:45:13.691Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "DXhYns3PuwE"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P012",
      "timestamp": "2026-05-15T04:45:15.579Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "6PAW2EUDte8"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P011",
      "timestamp": "2026-05-15T04:45:15.965Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "Kz9mNr4u0zY"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P010",
      "timestamp": "2026-05-15T04:45:16.437Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "b7_6HFg49Pw"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P011",
      "timestamp": "2026-05-15T04:45:17.723Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "FuSXDe4MOsE"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P012",
      "timestamp": "2026-05-15T04:45:18.264Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "izSnX3XPEBo"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P003",
      "timestamp": "2026-05-15T04:45:20.193Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "_R4_PpaSzyc"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P002",
      "timestamp": "2026-05-15T04:45:20.644Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "RcZ-8fxZF1w"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2026-05-15T04:45:21.059Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "b01g9MQ0n08"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2026-05-15T04:46:39.136Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "ML7SO4iMBsk"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:46:41.494Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "MNJfnTXHr0w"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P003",
      "timestamp": "2026-05-15T04:46:44.345Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "MGpz6zjgtCY"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T04:46:44.744Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "haJ1rrw3GWg"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P001",
      "timestamp": "2026-05-15T04:46:56.956Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "YTHz4u4CLg4"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P004",
      "timestamp": "2026-05-15T13:13:08.988Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "rNaijPnGHwU"
    },
    {
      "event_id": "EVT-001",
      "participant_id": "EVT-001-P007",
      "timestamp": "2026-05-15T13:13:19.805Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "RTOAtx9XgvM"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:24:54.106Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "4xJqpUgErtg"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:24:57.403Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "GnlHPnpPwuA"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:24:58.426Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "Y1wfHWFn5Zw"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:24:58.991Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "YF1yuZyjDHg"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:25:00.637Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "APgcOSRisfY"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:25:01.588Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "St2oqFbIPGQ"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:25:06.937Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "2dvfWVniTj0"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:25:36.263Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "mQufh_wubIY"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:04.169Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "mGsIUZWHyhM"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:05.335Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "qZyzBPvajwE"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:08.326Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "4NSLJbjJ8sA"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P006",
      "timestamp": "2026-05-15T13:39:12.309Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "taEeqSDLEW8"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P007",
      "timestamp": "2026-05-15T13:39:14.124Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "yvAvVo2AyHQ"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P007",
      "timestamp": "2026-05-15T13:39:14.785Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "xzcFox8vtf0"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P006",
      "timestamp": "2026-05-15T13:39:15.277Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "skNb02yPo_w"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P002",
      "timestamp": "2026-05-15T13:39:17.791Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "C5deAsVCrLs"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P003",
      "timestamp": "2026-05-15T13:39:18.368Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "EAjzvilSdsU"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P003",
      "timestamp": "2026-05-15T13:39:18.854Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "mKxnHdPdHs4"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P002",
      "timestamp": "2026-05-15T13:39:19.285Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "Wl5RTH4LZv4"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:19.667Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "FHqX97bR1lk"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:24.451Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "LqG3tlxdOiQ"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:26.536Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "Ztxy8XPIo9Y"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:27.407Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "hF3mnAgXSC0"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:28.260Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "6TykssRYQ6w"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:28.819Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "59OEIPd6yB8"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:29.227Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "08-FhRy6kuc"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:32.326Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "lOcGbYMt9Ik"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:34.240Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "vXI3n_TSJnU"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:35.442Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "i2oHLtQLtB8"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:39:38.743Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "ZkaQlq5cLs0"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:48:28.656Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "Aj-zHd51mEg"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:48:31.658Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "ep1C8PXNFCQ"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:48:32.518Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "3O5SlozuIso"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:48:34.158Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "8rZVI-fKA9c"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P020",
      "timestamp": "2026-05-15T13:48:57.352Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "cCa_nrLKchs"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P020",
      "timestamp": "2026-05-15T13:48:59.122Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "duOodIyIFbg"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P019",
      "timestamp": "2026-05-15T13:49:00.552Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "zoLXZ6txPgU"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P019",
      "timestamp": "2026-05-15T13:49:00.991Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "vuFXe_HiQPE"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P018",
      "timestamp": "2026-05-15T13:49:01.738Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "Z9OJY9mfu8U"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P018",
      "timestamp": "2026-05-15T13:49:02.128Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "5SrN3bp9oWA"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P017",
      "timestamp": "2026-05-15T13:49:02.539Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "JtXGTkbBN3M"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P017",
      "timestamp": "2026-05-15T13:49:02.851Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "E_l33EuY9U8"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P016",
      "timestamp": "2026-05-15T13:49:03.217Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "TvXqqq3_uSc"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P016",
      "timestamp": "2026-05-15T13:49:03.467Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "KfLkgejb-zk"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P015",
      "timestamp": "2026-05-15T13:49:03.818Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "kN9TUsm6DeY"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P015",
      "timestamp": "2026-05-15T13:49:04.111Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "Z-dv1cgQe6A"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P015",
      "timestamp": "2026-05-15T13:49:05.110Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "u0ImY56b6G8"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P015",
      "timestamp": "2026-05-15T13:49:06.955Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "IRd6CYNmnYY"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P012",
      "timestamp": "2026-05-15T13:49:08.252Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "xVBoseRc7k0"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P014",
      "timestamp": "2026-05-15T13:49:10.785Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "jKnKUPzaEZg"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P013",
      "timestamp": "2026-05-15T13:49:11.252Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "YEXnkzr0MA8"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P011",
      "timestamp": "2026-05-15T13:49:12.386Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "qgPgkne7ihI"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P010",
      "timestamp": "2026-05-15T13:49:12.691Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "RXCSQxrQqLQ"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P009",
      "timestamp": "2026-05-15T13:49:13.050Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "HSt_O8I8mFI"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P008",
      "timestamp": "2026-05-15T13:49:13.468Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "d4t033BeCCM"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P007",
      "timestamp": "2026-05-15T13:49:14.090Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "210ElDysAbE"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P006",
      "timestamp": "2026-05-15T13:49:15.457Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "4rE7HofPXPE"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P004",
      "timestamp": "2026-05-15T13:49:16.303Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "IfPX-0oeCdI"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P003",
      "timestamp": "2026-05-15T13:49:16.607Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "GOrsrmflYr8"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P002",
      "timestamp": "2026-05-15T13:49:17.003Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "Xt2NhrgqkfE"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:49:17.343Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "zfkC8xOtWHI"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P005",
      "timestamp": "2026-05-15T13:49:18.026Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "cLxymb2_w8k"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P006",
      "timestamp": "2026-05-15T13:49:18.425Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "ZGpUBQ6lUhc"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P007",
      "timestamp": "2026-05-15T13:49:19.036Z",
      "success": false,
      "action": "entry",
      "error_reason": "already_checked_in",
      "id": "UpM_tSf1k2A"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:49:31.102Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "Gchm9Tc3LxI"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T13:49:31.702Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "mzQG4fSMBq0"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T14:01:26.191Z",
      "success": true,
      "action": "exit",
      "error_reason": null,
      "id": "ZY6hXOE9mGQ"
    },
    {
      "event_id": "EVT-005",
      "participant_id": "EVT-005-P001",
      "timestamp": "2026-05-15T14:01:26.985Z",
      "success": true,
      "action": "entry",
      "error_reason": null,
      "id": "x78USlr7Rzc"
    }
  ],
  "$schema": "./node_modules/json-server/schema.json"
}