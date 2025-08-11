import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Icon from '@/components/ui/icon'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Workflow" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">АвтоПоток</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Решения</a>
            <a href="#" className="hover:text-primary transition-colors">Интеграции</a>
            <a href="#" className="hover:text-primary transition-colors">Цены</a>
            <a href="#" className="hover:text-primary transition-colors">Документация</a>
            <a href="#" className="hover:text-primary transition-colors">Сообщество</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Войти</Button>
            <Button>Попробовать бесплатно</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Автоматизируйте свой бизнес за минуты
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создавайте мощные автоматизированные рабочие процессы без программирования. 
              Соединяйте любые приложения и автоматизируйте рутинные задачи.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Video" className="w-5 h-5 mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают АвтоПоток?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощная платформа для автоматизации, которая растет вместе с вашим бизнесом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Визуальный редактор</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Создавайте сложные автоматизации с помощью интуитивного drag-and-drop интерфейса
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Link" className="w-6 h-6 text-white" />
                </div>
                <CardTitle>1000+ интеграций</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Подключайте любые популярные сервисы и приложения через готовые коннекторы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Готовые шаблоны</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Выбирайте из сотен готовых шаблонов или создавайте собственные автоматизации
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Корпоративный уровень безопасности с шифрованием и соответствием стандартам
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные интеграции</h2>
            <p className="text-xl text-muted-foreground">
              Подключайте ваши любимые сервисы за несколько кликов
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              'Gmail', 'Slack', 'Telegram', 'Google Sheets',
              'Notion', 'Airtable', 'Webhook', 'MySQL',
              'PostgreSQL', 'Salesforce', 'HubSpot', 'Zapier',
              'Discord', 'Twitter', 'Instagram', 'Facebook'
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name="Globe" className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Templates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Готовые шаблоны</h2>
            <p className="text-xl text-muted-foreground">
              Начните с проверенных решений для популярных задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Маркетинг</Badge>
                  <Icon name="Star" className="w-4 h-4 text-yellow-500" />
                </div>
                <CardTitle>Автоматизация email-рассылок</CardTitle>
                <CardDescription>
                  Создание персонализированных email-кампаний на основе действий пользователей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">25 блоков</span>
                  <Button variant="outline" size="sm">Использовать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Продажи</Badge>
                  <Icon name="Star" className="w-4 h-4 text-yellow-500" />
                </div>
                <CardTitle>Обработка лидов</CardTitle>
                <CardDescription>
                  Автоматическая квалификация и распределение входящих заявок между менеджерами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">18 блоков</span>
                  <Button variant="outline" size="sm">Использовать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Поддержка</Badge>
                  <Icon name="Star" className="w-4 h-4 text-yellow-500" />
                </div>
                <CardTitle>Система тикетов</CardTitle>
                <CardDescription>
                  Автоматическая обработка обращений клиентов и уведомления команды поддержки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">12 блоков</span>
                  <Button variant="outline" size="sm">Использовать</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Простые и понятные цены</h2>
            <p className="text-xl text-muted-foreground">
              Начните бесплатно и масштабируйтесь по мере роста
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle>Стартер</CardTitle>
                <div className="text-3xl font-bold">
                  Бесплатно
                </div>
                <CardDescription>
                  Для небольших проектов и экспериментов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">До 1,000 операций/мес</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">5 активных workflow</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Базовые интеграции</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Начать бесплатно</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle>Профессиональный</CardTitle>
                <div className="text-3xl font-bold">
                  2,990₽
                  <span className="text-base font-normal text-muted-foreground">/мес</span>
                </div>
                <CardDescription>
                  Для растущих команд и бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">До 100,000 операций/мес</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Неограниченные workflow</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Все интеграции</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Приоритетная поддержка</span>
                  </div>
                </div>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle>Корпоративный</CardTitle>
                <div className="text-3xl font-bold">
                  По запросу
                </div>
                <CardDescription>
                  Для крупных организаций
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Неограниченные операции</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">On-premise развертывание</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">SLA и выделенная поддержка</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Кастомные интеграции</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о платформе
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Что такое АвтоПоток?</AccordionTrigger>
                <AccordionContent>
                  АвтоПоток — это платформа для создания автоматизированных рабочих процессов. 
                  Она позволяет соединять различные приложения и сервисы для автоматизации рутинных задач без программирования.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Нужны ли навыки программирования?</AccordionTrigger>
                <AccordionContent>
                  Нет, АвтоПоток имеет визуальный интерфейс drag-and-drop, который позволяет создавать сложные автоматизации без написания кода. 
                  Однако для продвинутых сценариев можно использовать JavaScript.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Какие сервисы можно подключить?</AccordionTrigger>
                <AccordionContent>
                  Платформа поддерживает более 1000 интеграций с популярными сервисами: Google Workspace, Microsoft 365, Slack, Telegram, 
                  CRM-системы, базы данных, социальные сети и многие другие.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Можно ли использовать бесплатно?</AccordionTrigger>
                <AccordionContent>
                  Да, у нас есть бесплатный план, который включает до 1000 операций в месяц и 5 активных workflow. 
                  Этого достаточно для знакомства с платформой и небольших проектов.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Насколько безопасна платформа?</AccordionTrigger>
                <AccordionContent>
                  Мы используем корпоративный уровень безопасности: шифрование данных, SOC 2 Type II сертификация, 
                  регулярные аудиты безопасности и соответствие GDPR и другим стандартам.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Готовы автоматизировать свой бизнес?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Присоединяйтесь к тысячам компаний, которые уже используют АвтоПоток 
              для ускорения своих процессов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Workflow" className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">АвтоПоток</span>
              </div>
              <p className="text-muted-foreground">
                Платформа для автоматизации бизнес-процессов нового поколения
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Возможности</a></li>
                <li><a href="#" className="hover:text-primary">Интеграции</a></li>
                <li><a href="#" className="hover:text-primary">Шаблоны</a></li>
                <li><a href="#" className="hover:text-primary">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Документация</a></li>
                <li><a href="#" className="hover:text-primary">Блог</a></li>
                <li><a href="#" className="hover:text-primary">Академия</a></li>
                <li><a href="#" className="hover:text-primary">Сообщество</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">О нас</a></li>
                <li><a href="#" className="hover:text-primary">Карьера</a></li>
                <li><a href="#" className="hover:text-primary">Контакты</a></li>
                <li><a href="#" className="hover:text-primary">Партнеры</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 АвтоПоток. Все права защищены.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Github" className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index