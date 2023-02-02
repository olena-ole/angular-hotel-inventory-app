import { Room, RoomList } from './rooms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName : string = 'Hilton Hotel';
  numberOfRooms : number = 10;
  hideRooms : boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomsList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Standard Room',
      amenities: 'Ait Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photo: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      checkInTime: new Date('12-Feb-2023'),
      checkOutTime: new Date('13-Feb-2023'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Ait Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photo: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      checkInTime: new Date('12-Feb-2023'),
      checkOutTime: new Date('13-Feb-2023'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Ait Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photo: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      checkInTime: new Date('12-Feb-2023'),
      checkOutTime: new Date('13-Feb-2023'),
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
