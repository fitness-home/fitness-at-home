import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.scss']
})

export class ExpertDetailComponent implements AfterViewInit {
  // declare const Beacon: any;
  @ViewChild('chatWidgetContainer') chatWidgetContainer!: ElementRef;

  ngAfterViewInit() {
    // const chatbotContainer = document.getElementById('chatbot-container');
    // if (chatbotContainer) {
    //   window.Beacon('init', '64121b61d99c9c0007caf5af', {
    //     color: '#0078FF',
    //     icon: '//app.chatbot.com/assets/images/logo.png'
    //   });
    //   window.Beacon('identify', {
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //     phone: '123-456-7890'
    //   });
    //   window.Beacon('on', 'open', () => {
    //     console.log('Chatbot opened');
    //   });
    // }
  }

}
