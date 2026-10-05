# QAuto REST API Performance Testing

Performance testing of the QAuto REST API using Apache JMeter.

## API requests

- GET /characters
- GET /character/{id}
- POST /character
- PUT /character/{id}
- DELETE /character/{id}

Random character names are generated during test execution.

## Load tests

| Test | Users | Ramp-up | Loop Count |
|---|---:|---:|---:|
| 1 | 100 | 1 sec | 1 |
| 2 | 1000 | 1 sec | 2 |
| 3 | 5000 | 1 sec | 4 |

## Duration tests

Duration Assertions are added to all API requests.

| Test | Users | Ramp-up | Loop Count | Duration |
|---|---:|---:|---|---:|
| 4 | 1000 | 2 sec | Infinite | 30 sec |
| 5 | 5000 | 3 sec | Infinite | 60 sec |
| 6 | 10000 | 5 sec | Infinite | 180 sec |

HTML reports are stored in the `reports` directory.
