import { NextRequest, NextResponse } from 'next/server'
import { connect } from '@/dbConfig/dbconfig'
import User from '@/models/userModel'
connect()

export function GET(request: NextRequest) {
  console.log('Got the request')
  // const reqBody = await request.json()
  // console.log(reqBody)
  return NextResponse.json({ msg: 'Himanish is good1' }, { status: 200 })
}
